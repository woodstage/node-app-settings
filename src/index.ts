// <reference path="typings/globals/node/index.d.ts"/>
import JSONSetting from './JSONSetting';
import * as path from 'path';

let setting = new JSONSetting(path.join(__dirname, 'my.json'));
setting.init();
let config = setting.config;
setting.flush();
