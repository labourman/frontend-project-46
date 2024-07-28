const { getFileData, getFileFormat, parseFile } = require('./parsers');
const buildDiff = require('./diff');
const format = require('./formatters');

const genDiff = (filepath1, filepath2, formatType = 'stylish') => {
  const data1 = getFileData(filepath1);
  const data2 = getFileData(filepath2);
  const format1 = getFileFormat(filepath1);
  const format2 = getFileFormat(filepath2);
  const parsedData1 = parseFile(data1, format1);
  const parsedData2 = parseFile(data2, format2);
  const diff = buildDiff(parsedData1, parsedData2);
  return format(diff, formatType);
};

module.exports = genDiff;
