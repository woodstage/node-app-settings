# node-app-settings
Store app settings

## Usage

```javascript
const appSettings = require('node-app-settings');
let settings = appSettings.create('settings.json');
let config = settings.config; //Get the setting data object
config.user = 'Bob';
config.password = 'xxx';
settings.flush(); //Save to file
```
