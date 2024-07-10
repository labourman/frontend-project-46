const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff flat json', () => {
  const expected = readFile('expected_flat.txt').trim();
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const result = execFileSync('node', ['gendiff.js', file1, file2]).toString().trim();
  expect(result).toBe(expected);
});
