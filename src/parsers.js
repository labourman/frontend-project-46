import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parse = (filepath) => {
  const extname = path.extname(filepath);
  const content = readFileSync(filepath, 'utf-8');

  switch (extname) {
    case '.json':
      return JSON.parse(content);
    case '.yml':
    case '.yaml':
      return yaml.load(content);
    default:
      throw new Error(`Unknown file extension: ${extname}`);
  }
};

export default parse;
