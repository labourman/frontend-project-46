#!/usr/bin/env node

const { program } = require('commander');
const parseFile = require('./src/parsers');
const buildDiff = require('./src/diff');
const format = require('./src/formatters');
const packageJson = require('./package.json');

program
  .version(packageJson.version)
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    const diff = buildDiff(data1, data2);

    const output = format(diff, options.format);
    console.log(output);
  });

program.parse(process.argv);
