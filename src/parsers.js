const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const getPath = (filepath) => path.resolve(filepath);

const getFileFormat = (filepath) => path.extname(filepath).slice(1);

const getFileData = (filepath) => {
  const absolutePath = getPath(filepath);
  return fs.readFileSync(absolutePath, 'utf-8');
};

const parseFile = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Unsupported file format: ${format}`);
  }
};

module.exports = {
  getPath,
  getFileFormat,
  getFileData,
  parseFile,
};
