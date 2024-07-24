### Hexlet tests and linter status:
[![Actions Status](https://github.com/labourman/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/labourman/frontend-project-46/actions)

### Проект "Вычислитель отличий"

## Описание проекта:
Этот проект представляет собой утилиту командной строки для сравнения конфигурационных файлов в форматах JSON и YAML. Утилита позволяет выводить различия в нескольких форматах, таких как stylish, plain и json.

## Установка
Для установки проекта выполните следующие шаги:

1. Склонируйте репозиторий на свой компьютер:
```
git clone https://github.com/labourman/frontend-project-46.git
```

2. Перейдите в каталог с проектом:
```
cd frontend-project-46
```

3. Установите зависимости:
```
npm install
```

## Использование
После установки проекта вы можете использовать утилиту для сравнения файлов. Утилита поддерживает несколько форматов вывода.

# Сравнение файлов
Для сравнения файлов используйте следующую команду:

```
gendiff [options] <filepath1> <filepath2>
```

# Опции
* -V, --version - выводит номер версии
* -f, --format [type] - задает формат вывода (по умолчанию: "stylish")

# Примеры
Формат stylish
Этот формат используется по умолчанию и отображает различия в удобочитаемой древовидной структуре.

```
gendiff file1.json file2.json
```

Формат plain
Этот формат отображает различия в виде простых текстовых сообщений, указывающих изменения в свойствах.

```
gendiff --format plain file1.json file2.json
```

Формат json
Этот формат выводит различия в формате JSON, который может быть использован для дальнейшей обработки другими программами.

```
gendiff --format json file1.json file2.json
```

## Разработка
# Запуск тестов
Для запуска тестов используйте следующую команду:

```
npm test
```

# Линтинг
Для проверки кода на соответствие стандартам используйте следующую команду:

```
npm run lint
```


[![Maintainability](https://api.codeclimate.com/v1/badges/3d63934a54c65aa55e6e/maintainability)](https://codeclimate.com/github/labourman/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3d63934a54c65aa55e6e/test_coverage)](https://codeclimate.com/github/labourman/frontend-project-46/test_coverage)
