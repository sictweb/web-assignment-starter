# Web Assignment Starter

A template for bootstrapping a web assignment.

## Setup

Clone or download this repo and install all dependencies:

```
npm install
```

## Overview

The project is pre-configured with the following settings and tools:

- eslint for checking JavaScript linting issues in `src/`. See [.eslintrc.js](.eslintrc.js) for configuration.
- stylelint for checking CSS linting issues in `src/`. See [.stylelintrc.js](.stylelintrc.js) for configuration.
- prettier for formatting HTML, CSS, and JavaScript code in `src/`. See [.prettierrc.js](.prettierrc.js) for configuration.
- jest for testing JavaScript.

There is also a [.vscode](.vscode) directory, which includes recommended extensions and project settings, to help use the above.

## npm Scripts

There are a number of npm scripts to automate tasks, including:

- `npm run eslint` to run eslint
- `npm run prettier` to run prettier
- `npm run stylelint` to run stylelint
- `npm test` to run Jest
- `npm test-watch` to run Jest in [watch mode](https://jestjs.io/docs/en/cli.html#--watch) (automatically re-runs tests)

When running tests, if you want to run a single test, pass extra filename info:

```
npm test file1
```

See [package.json](package.json) for a complete list.

## Adding Tests

Unit tests can be added under `src/*` and be named using the `.test.js` suffix. For example, to write tests for `file1.js` use `file1.test.js`.

See the Jest [Getting Started docs](https://jestjs.io/docs/en/getting-started) for info on how to write tests.

## Instructions for Students

A student using this project would need to do the following:

```
npm install
...write code in src/...
npm test
...fix bugs in their code...
npm test
...repeat as necessary...
npm run prepare-submission
```

The command `npm run prepare-submission` will do the following:

- create a `submission/` directory, deleting an existing one if present
- run `prettier` on the source
- copy all files under `src/` to `submission/src`
- copy `package.json` to `submission/package.json` (i.e., so you can re-setup the project and run tests again if necessary).
- run `eslint` and write the output to `submission/eslint.log`
- run `stylelint` and write the output to `submission/stylelint.log`
- run `npm test` and write the output to `submission/test.log`
- zip the `submission/*` directory to `submission.zip`

The student can upload `submission.zip` to Blackboard for submission.

## Instructions for Faculty

When a student submits a `submission.zip` it will contain output from running all the commands listed above. See `submission/*.log` to get details on warnings or failures caused by running one of the commands (e.g., failed tests).

If you need to re-run the tests to confirm something, use `npm install` first to regenerate `node_modules/`. Some students don't follow instructions, and zip the entire assignment folder, which will include `node_modules/` and be huge. Try to educate them on why this is a bad idea (large file size, specific to an OS) and how to avoid (i.e., generate again using `npm install`).

Once you've written your code and tests in `src/` you can create the assignment zip (i.e., `assignment.zip`) using the following command:

```
$ npm run create-assignment-zip
Writing ./.vscode, ./src, ./.eslintrc.js, ./.npmrc, ./.prettierrc.js, ./stylelintrc.js, package.json to assignment.zip...
zipped!
```

If you want to include other files, modify `create-assignment-zip` in [package.json](package.json).
