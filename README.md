# Utils

- [Instalation](#installation)
- [Init new project](#init-new-project)
- [Publish project](#publish)

## Installation

```shell
git clone git@github.com:ailushyk/utils.git
cd utils && npm build
npm link
```

## Init new project
`🚧 work in progress 🚧`

```shell
npm init -y
```

### init tsconfig

[comment]: <> (or copy tsconfig.json)

```shell
npm i --save-dev typescript
tsc --init
```

### install eslint + prettier

```shell
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Publish

Usage: 

`utils publish [options]`

### Options:

Clean up build directory `--clean-build <build-dir>`

Display help for command `-h, --help`

### Example

```shell
// build and publish
utils publish

// clean up build directory, build and publish
utils publish --clean-build=dist
```
