const formatStylish = require('./stylish');
const formatPlain = require('./plain');
const formatJson = require('./json');

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson,
};

module.exports = (diff, format) => {
  const formatter = formatters[format];
  if (!formatter) {
    throw new Error(`Unknown format: ${format}`);
  }
  return formatter(diff);
};
