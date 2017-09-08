/// <reference types="node" />
import * as fs from 'fs';
import Setting from './Setting';

class JSONSetting extends Setting {

    _filePath: string = 'settings.json';
    private readonly _ext: string = 'json';

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
            let jsonStr = fs.readFileSync(this._filePath, { encoding: 'utf8' });
            this._config = jsonStr ? JSON.parse(jsonStr) : {};
        }catch(err){
            throw err;
        }
    }

  	flush(callback: Function = (() => {})): void {
  		fs.writeFile(this._filePath, JSON.stringify(this._config, null, 4), callback);
  	}

    /*
     * Write current settings to file
     */
    flushSync(): void {
		try{
		  fs.writeFileSync(this._filePath, JSON.stringify(this._config, null, 4));
		}catch(err){
          throw err;
		}
    }
}

export default JSONSetting;
