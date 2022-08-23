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

function extractPageFeatures(plugin_page) {
  
  var doc = new dom().parseFromString(plugin_page);

  const postContentElement = xpath.select('//div[@class="post-content"]', doc);

  const headerElement = xpath.select('//h1[@class="entry-title"]/a', postContentElement[0]);
  const header = headerElement[0].firstChild.nodeValue;

  const descriptionElement = xpath.select('./p/span', postContentElement[0]);
  const description = descriptionElement[0].firstChild.nodeValue;

  const meta = xpath.select('//ul[@class="meta"]', doc);

  const date = xpath.select('./li/a', meta[0])[0].firstChild.data;

  const tags = xpath.select('./li/a[@rel="tag"]', meta[0]);

  const categories = xpath.select('./li/a[@rel="catgeory tag"]', meta[0]);

  return {
    Name: header,
    Type: tags[0].firstChild.data,
    Use: "Mixing",
    Description: description,
    Date: Date.parse(date),
    Comments: "",
  }
}

module.exports = {
  extractPageUrls,
  extractPageFeatures
};