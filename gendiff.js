#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');

// Функция для чтения и парсинга JSON файлов
const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileContent);
};

program
  .version(packageJson.version)
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    
    console.log('File 1 data:', data1);
    console.log('File 2 data:', data2);

    if (options.format) {
      console.log('Selected format:', options.format);
    }
  });

program.parse(process.argv);
