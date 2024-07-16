const formatStylish = require('./stylish');
const formatPlain = require('./plain');

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
};

module.exports = (diff, format) => {
  const formatter = formatters[format];
  if (!formatter) {
    throw new Error(`Unknown format: ${format}`);
  }
  return formatter(diff);
};
