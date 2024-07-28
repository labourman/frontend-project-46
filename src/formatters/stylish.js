const _ = require('lodash');

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }

  const indentSize = depth * 4;
  const currentIndent = ' '.repeat(indentSize);
  const bracketIndent = ' '.repeat(indentSize - 2);

  const lines = Object
    .entries(value)
    .map(([key, val]) => `${currentIndent}${key}: ${stringify(val, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

const formatStylish = (diff, depth = 1) => {
  const indentSize = depth * 4 - 2;
  const currentIndent = ' '.repeat(indentSize - 2);
  const bracketIndent = ' '.repeat(indentSize - 2);

  const lines = diff.map(({
    key, type, value, oldValue, newValue, children,
  }) => {
    switch (type) {
      case 'nested':
        return `${currentIndent}  ${key}: ${formatStylish(children, depth + 1)}`;
      case 'added':
        return `${currentIndent}+ ${key}: ${stringify(value, depth)}`;
      case 'removed':
        return `${currentIndent}- ${key}: ${stringify(value, depth)}`;
      case 'changed':
        return [
          `${currentIndent}- ${key}: ${stringify(oldValue, depth)}`,
          `${currentIndent}+ ${key}: ${stringify(newValue, depth)}`,
        ].join('\n');
      case 'unchanged':
        return `${currentIndent}  ${key}: ${stringify(value, depth)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

module.exports = formatStylish;
