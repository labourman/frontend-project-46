import parse from '../src/parsers.js';

test('parse JSON', () => {
  const data = '{"key": "value"}';
  const expected = { key: 'value' };
  expect(parse(data, '.json')).toEqual(expected);
});

test('genDiff YAML', () => {
  const file1Path = getFixturePath('file1.yml');
  const file2Path = getFixturePath('file2.yml');
  const expected = readFixtureFile('expected_yaml.txt');
  expect(genDiff(file1Path, file2Path)).toBe(expected);
});
