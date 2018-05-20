# typescript-template
Template for creating node.js projects running with TypeScript + 
Mocha (testing framework) + Nyc (coverage tests) + ES-Lint + Prettier.

## How to use it

Fork this project and use it as a starting point to your own project. 
Change files and folders as you see fit.

## npm commands available

This package brings some npm commands that may be useful during development:

* **npm run build**
    * transpile `src/main/ts/**/*.ts` files into `lib/js` folder
* **npm start**
    * runs the transpiled version
* **npm test**
    * runs mocha (tests) + nyc for coverage tests 
* **npm run lint**
    * runs eslint alone
* **npm run watch-test**
    * keep watching for changes in `src` folder and re-run npm test 
* **npm run clean**
    * remove folders created by tools such as test coverage