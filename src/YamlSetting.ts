/// <reference types="node" />
import * as fs from 'fs';
import Setting from './Setting';
//import yaml from 'js-yaml';
let yaml = require('js-yaml');

class YamlSetting extends Setting {

    _filePath: string = 'settings.yml';
    private readonly _ext: string = 'yml';

    constructor( filePath?: string ){
        super();
        if(filePath){
            this._filePath = filePath;
        }
        this.init();
    }

    init(): void {
        try{
            let fd = fs.openSync(this._filePath, 'a+');
            var doc = yaml.safeLoad(fs.readFileSync(this._filePath, { encoding: 'utf8' }), null, /*json behaviour*/true);
            this._config = doc || {};
        }catch(err){
            throw err;
        }
    }

    /*
     * Write current settings to file
     */
    flush(): void {
        let str = yaml.safeDump(this._config, {});
        fs.writeFileSync(this._filePath, str);
    }

    /*
     * Write current settings to file
     */
    flushSync(): void {
      try{
        let str = yaml.safeDump(this._config, {});
        fs.writeFileSync(this._filePath, str);
      }catch(err){
            throw err;
      }
    }
}

export default YamlSetting;
