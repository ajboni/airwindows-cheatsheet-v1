const handle_wp = require('../src/scraping/handle_wp');
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



test('handle wah page', async () => {

  const input_data_path = path.resolve(__dirname, './Wah_Airwindows.html');
  var xml_data = await fs.readFile(input_data_path, "UTF-8");
  
  const result = handle_wp.extractPageFeatures(xml_data);
  expect(result.Name).toBe('Wah');
  expect(result.Type).toBe('EQ');
  expect(result.Date).toBe(1207008000000);
  expect(result.Description).toMatch(/is the definitive.*/);
});


