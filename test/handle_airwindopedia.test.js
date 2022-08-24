const handle_awp = require('../src/scraping/handle_airwindopedia');
const fs = require('fs').promises;
const path = require('path');


test('loads airwindopedia as of 2022-08-22', async () => {

  const input_data_path = path.resolve(__dirname, './Airwindopedia.txt');
  var text = await fs.readFile(input_data_path, "UTF-8");
  
  const result = handle_awp.extractDatabase(text);
  expect(result["Acceleration"]["Category"]).toBe("Subtlety");
  expect(result["Acceleration"]["Description"]).toMatch(/^is an acceleration .*/m);
  expect(result["Acceleration"]["Description"]).toMatch(/.*tonal problem without altering the basic mix balance\.$/m);
  expect(Object.keys(result).length).toBe(300);
//  expect(Object.keys(result).length).toBe(287); when all names match there should be 287 entries, but there are mismatches due to:

//Apicolypse
//APIcolypse

// BussColors4
// BussColors 4

// GuitarConditioner
// Guitar Conditioner

// HardVaccum
// Hard Vaccum

// HighImpact
// High Impact

// IronOxideClassic
// Iron Oxide Classic

// Logical4
// Logical 4

// VoiceOfTheStarship
// Voice Of The Starship

// X Filters
// Y Filters
// Z2 and Z Filters

});


