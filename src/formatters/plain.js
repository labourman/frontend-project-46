const _ = require('lodash');

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const formatPlain = (diff, path = []) => {
  const lines = diff.flatMap((node) => {
    const fullPath = [...path, node.key].join('.');
    switch (node.type) {
      case 'removed':
        return `Property '${fullPath}' was removed`;
      case 'added':
        return `Property '${fullPath}' was added with value: ${formatValue(node.value)}`;
      case 'unchanged':
        return [];
      case 'changed':
        return `Property '${fullPath}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
      case 'nested':
        return formatPlain(node.children, [...path, node.key]);
      default:
        throw new Error(`Unknown type: ${node.type}`);
    }
  });
  return lines.join('\n');
};

module.exports = formatPlain;
