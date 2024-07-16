const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const parseFile = (filename) => {
  const baseDir = path.resolve(__dirname, '..', '__fixtures__'); // Базовая директория
  const filepath = path.isAbsolute(filename) ? filename : path.join(baseDir, filename); // Проверка, является ли путь абсолютным
  const ext = path.extname(filepath);
  const content = fs.readFileSync(filepath, 'utf-8');

  if (ext === '.json') {
    return JSON.parse(content);
  }

  if (ext === '.yaml' || ext === '.yml') {
    return yaml.load(content);
  }

  throw new Error(`Unsupported file extension: ${ext}`);
};

module.exports = parseFile;
