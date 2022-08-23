
// This could change, we might need a better approach.
const introTextSeparator = /(\r\n){3,}[^\r]/;
const entriesSeparator = /#{3,}/;


function extractDatabase(content) {

  const entries = content.split(entriesSeparator);
  const intro = entries.shift();

  const categoriesText = intro.split(introTextSeparator)[1];
  const categoriesRegex = /^([\w]{1}[\w\s\-]+):(.+)$/gm;
  const categoriesMatches = categoriesText.matchAll(categoriesRegex);

  const entryDatabase = {};

  for (const match of categoriesMatches) {
    const category = match[1].trim();
    const matchEntries = match[2].split(",").map((e) => e.trim());
    // categoriesDB[category] = matchEntries;
    matchEntries.array.forEach(element => {
      entryDatabase[element] = {"Category": category};
    });
  }

  for (const entryItem of entries) {

    const entryText = entryItem.trim();

    const entrySplit = entryText.split(/\s+(.*)/s);

    const entry = entrySplit[0];
    const description = entrySplit[1];

    const existingEntry = entryDatabase[entry] ?? {};

    existingEntry["Description"] = description;
    entryDatabase[entry] = existingEntry;
  };

  return entryDatabase;
}


module.exports = {
  extractDatabase
};