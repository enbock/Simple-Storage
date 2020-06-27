# Simple Storage for PWA
[![Testing](https://github.com/enbock/Simple-Storage/workflows/Testing/badge.svg)](https://github.com/enbock/Simple-Storage/actions)
[![Publishing](https://github.com/enbock/Simple-Storage/workflows/Publishing/badge.svg)](https://github.com/enbock/Simple-Storage/actions)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/enbock/Simple-Storage/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/enbock/Simple-Storage/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/enbock/Simple-Storage/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/enbock/Simple-Storage/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/enbock/Simple-Storage/badges/build.png?b=master)](https://scrutinizer-ci.com/g/enbock/Simple-Storage/build-status/master)

A simple storage manager for Progressive Web Applications.    
The Simple Storage can store: 
* string
* int
* boolean
* number
* (passive) object

## Features
- Provide Adapter(Callback) based Interface
- Developed with Injection Methodology
- Any storage of [Web Storage Interface] can be used. 
- Data model to JSON and back conversion.

## Usage
```typescript
const storage: DataStorage = new DataStorage('example', window.localStorage);
const adapter: IObserverAdapter<string> = {
  onChange(newValue: string): void {
    console.log('Value "' + newValue + '" was stored in "example::theKey".');
  }
};
const observer: Observer<string> = new Observer<string>(
  storage.loadData('theKey', 'initial value'),
  storage.attach<string>('theKey', adapter)
);

observer.value = 'Hello World!';
```

## Testing
### Using this library in your project
This library is providing in [ECMAScript® 2020] language. When you use **jest**,
you get this error by using my library:
```text
  Details:
  
  <YOUR_PATH>\node_modules\@enbock\state-value-observer\ListenerAdapter.js:1
  export default class ListenerAdapter {
  ^^^^^^
  
  SyntaxError: Unexpected token 'export'
      at compileFunction (vm.js:341:18)
```

See more: https://jestjs.io/docs/en/tutorial-react-native#transformignorepatterns-customization

#### Reason and solution
Jest running internally on **ES5**, that does not know the ES6-imports.

##### Force converting ES6+ Libraries
To solve this, you have to *exclude* all my libraries from the *exclusion-list*:
```
"transformIgnorePatterns": [
  "/node_modules/(?!(@enbock)/)"
]
```

##### Let babel "learn" ES6+
`babel.config.js`
```js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript'
  ]
};
```
See more: https://github.com/facebook/jest#using-typescript

### Run tests
```shell script
yarn test
```

## Building
```shell script
yarn build
```

[ECMAScript® 2020]:https://tc39.es/ecma262/
[Web Storage Interface]:(https://www.w3.org/TR/webstorage/#the-storage-interface)
