const handle_wp = require('../src/handle_wp');
const fs = require('fs').promises;
const path = require('path');

test('loads bad wordpress index', () => {
  const result = handle_wp.extractPageUrls("test input");
  expect(result.length).toBe(0);
});

test('loads wordpress index', async () => {

  const input_data_path = path.resolve(__dirname, './wp-sitemap-posts-post-1.xml');
  var xml_data = await fs.readFile(input_data_path, "UTF-8");
  
  const result = handle_wp.extractPageUrls(xml_data);
  expect(result.length).toBe(526);
  expect(result[0]).toMatch(/http.*/);
  expect(result[result.length-1]).toMatch(/http.*/);
});


