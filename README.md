# typescript-template

## What it is

This is a template for creating node.js projects running with TypeScript + 
Mocha (testing framework) + Nyc (coverage tests) + ES-Lint.

## How to use it

Fork this project directly from [https://github.com/jorgemsrs/typescript-template] as a starting point to your own project, and change the necessary files and folders.

## npm commands available

This package brings some npm commands that may be useful during your development:

* **npm run build**
    * transpile `src/main/ts/**/*.ts` files into `lib/js` folder
* **npm start**
    * runs the transpiled version
* **npm test**
    * runs es-lint + mocha (tests) + nyc for coverage tests 
* **npm run lint**
    * runs es-lint alone
* **npm run watch-test**
    * keep watching for changes in `src` folder and re-run npm test 
* **npm run clean**
    * remove folders created by tools such as test coverage