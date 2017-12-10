# react & redux & typescript & webpack

## getting startted

+ see https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

The point is the below:

1. init the project
2. install our dependencies: `react, react-dom, webpack, typescript`
3. conf `tsconfig.json` and `webpack.config.js`
4. impl using react
5. exec `webpack` or set `npm install build` in `package.json`


+ linter

```bash
# https://github.com/palantir/tslint-react
npm install --save-dev tslint-config-airbnb tslint tslint-react
touch tslint.json
```

+ test typescript (only)

Assume the editor is VScode.

1. run the typescript build via `tsc -p .`, or Run Build Task (⇧⌘B).
Note) you might set `["es6", "dom"]`@`compilerOption > lib` in tsconfig.json, otherwise, the following error occurs:

```bash
node_modules/@types/jest/index.d.ts(1053,34): error TS2304: Cannot find name 'Set'.
```

2. configure `.vscode/launch.json` below:

```json
{
// snip
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "cwd": "${workspaceRoot}",
      "program": "${workspaceRoot}/src/components/reducer.tsx",
      "sourceMaps": true,
      "outFiles": [
        "${workspaceRoot}/dist/components/reducer.js"
      ]
// snip
```

3. run debugger by F5.


## introduce react-redux

+ installation

```bash
# see also https://github.com/Microsoft/TypeScript-React-Starter#installing-redux
npm install --save redux react-redux @types/react-redux
```

+ test redux with jest

see https://github.com/facebook/jest#using-typescript:

```bash
npm install --save-dev ts-jest @types/jest jest
```

exec `jest` and you will pass/fail the test:

```bash
$ jest
 PASS  src/components/index.test.tsx
  ✓ dd (5ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.238s
Ran all test suites.
``