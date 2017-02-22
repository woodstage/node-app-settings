# node-app-settings
Store app settings

[![](https://img.shields.io/travis/woodstage/node-app-settings.svg?style=flat-square)](https://travis-ci.org/woodstage/node-app-settings)
[![Coveralls](https://img.shields.io/coveralls/woodstage/node-app-settings.svg?style=flat-square)](https://coveralls.io/github/woodstage/node-app-settings)


[![npm package](https://img.shields.io/npm/v/node-app-settings.svg?style=flat-square)](https://www.npmjs.org/package/node-app-settings)
[![NPM downloads](http://img.shields.io/npm/dm/node-app-settings.svg?style=flat-square)](https://npmjs.org/package/node-app-settings)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/woodstage/node-app-settings.svg)](http://isitmaintained.com/project/woodstage/node-app-settings "Average time to resolve an issue")

## Usage

```javascript
const appSettings = require('node-app-settings');
let settings = appSettings.create('settings.json');//Absolute path or relative path
let config = settings.config; //Get the setting data object
config.user = 'Bob';
config.password = 'xxx';
settings.flush(); //Save to file

//Or create a ini type setting
let iniSettings = appSettings.create('settings.ini');
//Or customized file extension name
let mySettings = appSettings.create('settings.my', /* type */'json');
```

Current there are **json** and **ini** type are available.
