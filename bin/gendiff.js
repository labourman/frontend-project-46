#!/usr/bin/env node

import { Command } from 'commander';
import { readFileSync } from 'fs';
import genDiff from '../src/genDiff.mjs'; // Используем .mjs расширение
import path from 'path';

const program = new Command();

const parse = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const content = readFileSync(absolutePath, 'utf-8');
  return JSON.parse(content);
};

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const data1 = parse(filepath1);
    const data2 = parse(filepath2);
    const diff = genDiff(data1, data2);
    console.log(diff);
  })
  .helpOption('-h, --help', 'output usage information')
  .parse(process.argv);
