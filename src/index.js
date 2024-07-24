const parseFile = require('./parsers');
const buildDiff = require('./diff');
const format = require('./formatters');

const genDiff = (filepath1, filepath2, formatType = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  const diff = buildDiff(data1, data2);
  return format(diff, formatType);
};

module.exports = genDiff;
