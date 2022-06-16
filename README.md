# jest

added a npm cmd to execute the js test runner in the package.json: npm run test 
"test": "jest --watchAll --verbose"

 add types to the project to give us intellisense for all the matchers built into jest
to do so, run npm i @types/jest and create jsconfig.json

add --coverage to     "test": "jest --watchAll --verbose"
100% code coverage != good test suite, good thing to show


## initialize the project
npm init vite

npm i jest --save-dev

npm i @types/jest

## run test
npm run test 