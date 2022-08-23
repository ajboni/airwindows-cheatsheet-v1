const xpath = require('xpath')
const dom = require('xmldom').DOMParser

function extractPageUrls(xml_data) {
  
  var doc = new dom().parseFromString(xml_data);

  const query = xpath.parse('//loc')

  const nodes = query.select({ 
      node: doc,
      allowAnyNamespaceForNoPrefix: true
  });
  return nodes.map(_ => _.firstChild.data);
}

module.exports = {
  extractPageUrls
};