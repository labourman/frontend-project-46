const _ = require('lodash');

const indent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const indentSize = depth + 1;
  const lines = Object.entries(value).map(
    ([key, val]) => `${indent(indentSize)}  ${key}: ${stringify(val, indentSize)}`
  );
  return `{\n${lines.join('\n')}\n  ${indent(depth)}}`;
};

const formatStylish = (diff, depth = 1) => {
  const lines = diff.map((node) => {
    switch (node.type) {
      case 'removed':
        return `${indent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
      case 'added':
        return `${indent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
      case 'unchanged':
        return `${indent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
      case 'changed':
        return [
          `${indent(depth)}- ${node.key}: ${stringify(node.oldValue, depth)}`,
          `${indent(depth)}+ ${node.key}: ${stringify(node.newValue, depth)}`,
        ].join('\n');
      case 'nested':
        return `${indent(depth)}  ${node.key}: {\n${formatStylish(node.children, depth + 1)}\n  ${indent(depth)}}`;
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  });
  return lines.join('\n');
};

module.exports = formatStylish;
