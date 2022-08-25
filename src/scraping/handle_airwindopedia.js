
// This could change, we might need a better approach.
const introTextSeparator = /(\r\n){3,}/;
const entriesSeparator = /#{3,}/;


function extractDatabase(content) {

  const entries = content.split(entriesSeparator);
  const intro = entries.shift();

  const categoriesText = intro.split(introTextSeparator)[2];
  const categoriesRegex = /^([\w]{1}[\w\s\-]+):(.+)$/gm;
  const categoriesMatches = categoriesText.matchAll(categoriesRegex);

  const entryDatabase = {};

  for (const match of categoriesMatches) {
    const category = match[1].trim();
    const matchEntries = match[2].split(",").map((e) => e.trim());
    // categoriesDB[category] = matchEntries;
    matchEntries.forEach(element => {
      entryDatabase[element] = {"Category": category, "Name": element};
    });
  }

  const entryRegex = /^([\w-]+)[^\w-]+(.*)$/s;
  for (const entryItem of entries) {

    const entryText = entryItem.trim();

    const entrySplit = entryText.match(entryRegex, 2);

    if (!entrySplit || entrySplit.length < 3) {
      console.log("Failed to parse entry", entryText);
      continue;
    }

    const entry = entrySplit[1].trim();
    const description = entrySplit[2].trim();

    const existingEntry = entryDatabase[entry] ?? {"Name": entry};

    existingEntry["Description"] = description;
    entryDatabase[entry] = existingEntry;
  };

  return entryDatabase;
}


module.exports = {
  extractDatabase
};