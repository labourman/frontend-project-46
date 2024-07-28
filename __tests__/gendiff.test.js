const path = require('path');
const fs = require('fs');
const genDiff = require('../src/index');

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

test('gendiff recursive json', () => {
  const expected = readFixtureFile('expected_recursive.txt');
  const file1 = getFixturePath('file1_recursive.json');
  const file2 = getFixturePath('file2_recursive.json');
  const result = genDiff(file1, file2).trim();
  expect(result).toBe(expected);
});

test('gendiff recursive yaml', () => {
  const expected = readFixtureFile('expected_recursive.txt');
  const file1 = getFixturePath('file1_recursive.yml');
  const file2 = getFixturePath('file2_recursive.yml');
  const result = genDiff(file1, file2).trim();
  expect(result).toBe(expected);
});

test('gendiff plain format', () => {
  const expected = readFixtureFile('expected_plain.txt');
  const file1 = getFixturePath('file1_recursive.json');
  const file2 = getFixturePath('file2_recursive.json');
  const result = genDiff(file1, file2, 'plain').trim();
  expect(result).toBe(expected);
});

test('gendiff json format', () => {
  const file1 = getFixturePath('file1_recursive.json');
  const file2 = getFixturePath('file2_recursive.json');
  const result = genDiff(file1, file2, 'json').trim();
  const expected = JSON.stringify(require(getFixturePath('expected_recursive.json')), null, 2);
  expect(result).toBe(expected);
});
