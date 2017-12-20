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
Note) you should set `"lib": ["es6", "dom"]` @ `compilerOption` in tsconfig.json. Otherwise, the following error  might occur:

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

see also https://github.com/Microsoft/TypeScript-React-Starter

+ installation

```bash
# see also https://github.com/Microsoft/TypeScript-React-Starter#installing-redux
npm install --save redux react-redux @types/react-redux
```

### test

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
```

+ writing tests with Jest


```bash
# you should load `@types/enzyme-adapter-react-16` in typescript.
npm install --save enzyme @types/enzyme enzyme-adapter-react-16 @types/enzyme-adapter-react-16
# If you are using a React below version 15.5.0, you will also need to install react-addons-test-utils.
# npm install --save-dev react-addons-test-utils
```

+ sinon

```bash
npm install --save sinon @types/sinon
```

SinonJS supports spy, stab and mock. You can write event test like this:

```typescript
import * as React from 'react';
import * as enzyme from 'enzyme';
import Component from './Component';
import * as sinon from 'sinon';

import * as Adapter from "enzyme-adapter-react-16";

it("onSubmit in form", () => {
  const onSubmit = sinon.spy();
  const wrapper = enzyme.shallow(<Component onSubmit={onSubmit}/>);
  wrapper.setState({input: "hello"});
  wrapper.find("form").simulate("submit", { preventDefault() {} });

  expect(onSubmit.callCount).toEqual(1);
  expect(onSubmit.args[0]).toEqual(["hello"]);
});
```
