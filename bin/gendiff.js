#!/usr/bin/env node
const { program } = require('commander');
const genDiff = require('../src/index.js');
const path = require('path');

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const file1 = getFixturePath(filepath1);
    const file2 = getFixturePath(filepath2);
    const diff = genDiff(file1, file2, options.format);
    console.log(diff);
  });

program.parse(process.argv);
