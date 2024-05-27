#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import parse from '../src/parsers.js';
import genDiff from '../src/genDiff.mjs';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(filepath1);
    const absolutePath2 = path.resolve(filepath2);
    const data1 = parse(absolutePath1);
    const data2 = parse(absolutePath2);
    const diff = genDiff(data1, data2);
    console.log(diff);
  })
  .helpOption('-h, --help', 'output usage information')
  .parse(process.argv);
