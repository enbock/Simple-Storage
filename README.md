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
```shell script
yarn test
```

## Building
```shell script
yarn build
```

[Web Storage Interface]:(https://www.w3.org/TR/webstorage/#the-storage-interface)
