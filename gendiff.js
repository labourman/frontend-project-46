#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const packageJson = require('./package.json');

// Функция для чтения и парсинга JSON файлов
const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileContent);
};

// Функция для сравнения файлов и генерации диффа
const genDiff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
  const lines = keys.map((key) => {
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  });
  return `{\n${lines.join('\n')}\n}`;
};

program
  .version(packageJson.version)
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);

    const diff = genDiff(data1, data2);
    console.log(diff);
  });

program.parse(process.argv);
