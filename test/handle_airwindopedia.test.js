const handle_awp = require('../src/scraping/handle_airwindopedia');
const fs = require('fs').promises;
const path = require('path');


test('loads wordpress index', async () => {

  const input_data_path = path.resolve(__dirname, './Airwindopedia.txt');
  var text = await fs.readFile(input_data_path, "UTF-8");
  
  const result = handle_awp.extractDatabase(text);
  expect(Object.keys(result).length).toBe(287);
});


