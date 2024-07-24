#!/usr/bin/env node

const { program } = require('commander');
const genDiff = require('../src/index');
const packageJson = require('../package.json');

program
  .version(packageJson.version)
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const output = genDiff(filepath1, filepath2, options.format);
    console.log(output);
  });

program.parse(process.argv);
