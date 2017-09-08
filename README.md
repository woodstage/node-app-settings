# node-app-settings
Store app settings

[![](https://img.shields.io/travis/woodstage/node-app-settings.svg?style=flat-square)](https://travis-ci.org/woodstage/node-app-settings)
[![Coveralls](https://img.shields.io/coveralls/woodstage/node-app-settings.svg?style=flat-square)](https://coveralls.io/github/woodstage/node-app-settings)


[![npm package](https://img.shields.io/npm/v/node-app-settings.svg?style=flat-square)](https://www.npmjs.org/package/node-app-settings)
[![NPM downloads](http://img.shields.io/npm/dm/node-app-settings.svg?style=flat-square)](https://npmjs.org/package/node-app-settings)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/woodstage/node-app-settings.svg)](http://isitmaintained.com/project/woodstage/node-app-settings "Average time to resolve an issue")

## Supported Types
* JSON
* INI
* YAML

## Usage

You can create settings object by providing setting file path and type. If the file doesn't exist, a new file will be created on the path.
```javascript
const appSettings = require('node-app-settings');

let iniSetting = appSettings.create('settings.ini', 'INI');
let jsonSetting = appSettings.create('settings.json', 'JSON');
let yamlSetting = appSettings.create('settings.yml', 'YAML');
```

You can then get/update settings on the object. And if you want to store any settings, don't forget to call **flush** before exit.
```javascript
let settings = appSettings.create('settings.json');//Absolute path or relative path
let config = settings.config; //Get the setting data object
config.user = 'Bob';
config.password = 'xxx';
settings.flush((err => {
	console.log(err);
})); //Save to file asynchronous
settings.flushSync(); //Save to file
```

## LICENSE
MIT
