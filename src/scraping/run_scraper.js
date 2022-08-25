const handle_wp = require('./handle_wordpress');
const handle_awp = require('./handle_airwindopedia');
const fetch = require("node-fetch");
const pLimit = require('p-limit');
const fs = require('fs').promises;
const path = require('path');



function dict_values(dict) {
    return Object.keys(dict).map(function(key){
        return dict[key];
    });
}

function nameToLower(name) {
    return name.split(" ")
        .join("")
        .toLowerCase();
}

async function getWordPressInfo(current_db) {
    const current_url_dict = Object.assign({}, ...current_db.map((x) => ({[x.Url]: x})));

    const request = await fetch("https://www.airwindows.com/wp-sitemap-posts-post-1.xml");
    const wp_index = await request.text();

    const page_urls = handle_wp.extractPageUrls(wp_index)
    // .slice(0, 5)
    ;
    
    const limit = pLimit(3);
    const fetchTasks = [];

    const promises = page_urls.map(page_url => {
        var current_data = current_url_dict[page_url];
        if (current_data && current_data["Date"]) {
            return Promise.resolve(current_data);
        }

        current_data = current_data ?? {
            "Use": "",
            "Type": "",
            "Description": "",
            "Comments": "",
        };

        console.log("Fetching", page_url);
        return limit(() => fetch(page_url)
            .then(async _ => {
                const page_text = await _.text();
                try {
                    const plugin_info = handle_wp.extractPageFeatures(page_text);
                    plugin_info["Url"] = page_url;
                    console.log("Got info for", plugin_info.Name);
                    return Object.assign(current_data, plugin_info);
                }
                catch(err) {
                    console.error("Failed to handle", page_url, page_text);
                }

                const url_split = page_url.replace(/\/$/, "").split("/");
                const simple = {
                    "Name": url_split[url_split.length - 1],
                    "Url": page_url
                }
                return Object.assign(current_data, simple);
            })
        );
    })

    return Promise.all(promises);
}

async function getAirwindopediaInfo() {
    const request = await fetch("https://www.airwindows.com/wp-content/uploads/Airwindopedia.txt");
    const awp_text = await request.text();

    return handle_awp.extractDatabase(awp_text);
}

function LoadExistingDatabase(db_path) {
    // FAILED EFFORTS TO LOAD EXISTING DB SO WE DON'T HAVE TO DOWNLOAD EVERYTHING EVERY TIME
    // const db = await import(db_path);

    // const current_db_string = await fs.readFile(db_path, "utf8");
    // const stripped = current_db_string
    //     .replace("export default ", "")
    //     .replace(/;\s*$/, "")
    //     .replace(/  (\w+):/g, '  "$1":')
    //     .replace(/,(\s*)}/mg, '$1}')
    //     // .replace(/(:\s*'[^']*[^\\])?"([^']*')/, '$1\\"$2')
    //     // .replace(/([^\\])?'/mg, "$1\\'")
    //     ;
    // const current_db = JSON.parse(stripped);

    return [];
}


async function run() {

    const db_path = path.resolve(__dirname, '../database.generated.js');
    const current_db = LoadExistingDatabase(db_path);

    const getWordPressInfoTask = getWordPressInfo(current_db);
    const getAirwindopediaTask = getAirwindopediaInfo();

    const awp_dict = await getAirwindopediaTask;
    const wp_array = await getWordPressInfoTask;
    const wp_dict = Object.assign({}, ...wp_array.map((x) => ({[nameToLower(x.Name)]: x})));

    for (const [key, value] of Object.entries(awp_dict)) {
        const awp_name = nameToLower(key);
        const foundItem = wp_dict[awp_name] ?? value;
        if (foundItem != value) {
            foundItem["Category"] = value["Category"];
            foundItem["Description"] = value["Description"];
        }

        wp_dict[awp_name] = foundItem;
    }

    const values = dict_values(wp_dict);
    
    const sorted_vals = values.sort((a, b) => a.Name.toLowerCase() < b.Name.toLowerCase() ? -1 : 1);
    const stringified = JSON.stringify(sorted_vals, null, 2);
    
    await fs.writeFile(db_path, "export default" + stringified.replace(/ "(\w+)":/g, ' $1:') + ";");
}

run()