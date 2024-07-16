const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff recursive json', () => {
  const expected = readFile('expected_recursive.txt').trim();
  const file1 = getFixturePath('file1_recursive.json');
  const file2 = getFixturePath('file2_recursive.json');
  const result = execFileSync('node', ['gendiff.js', file1, file2]).toString().trim();
  expect(result).toBe(expected);
});

test('gendiff recursive yaml', () => {
  const expected = readFile('expected_recursive.txt').trim();
  const file1 = getFixturePath('file1_recursive.yml');
  const file2 = getFixturePath('file2_recursive.yml');
  const result = execFileSync('node', ['gendiff.js', file1, file2]).toString().trim();
  expect(result).toBe(expected);
});

test('gendiff json format', () => {
  const file1 = getFixturePath('file1_recursive.json');
  const file2 = getFixturePath('file2_recursive.json');
  const result = execFileSync('node', ['gendiff.js', '--format', 'json', file1, file2]).toString().trim();
  const expected = JSON.stringify(require(getFixturePath('expected_recursive.json')), null, 2);
  expect(result).toBe(expected);
});
