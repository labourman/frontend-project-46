const fs = require('fs');
const path = require('path');
const genDiff = require('../gendiff');

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff flat json', () => {
  const expected = readFile('expected_flat.txt');
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const diff = genDiff(file1, file2);
  expect(diff).toBe(expected);
});
