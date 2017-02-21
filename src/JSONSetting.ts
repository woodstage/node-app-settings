// <reference path="typings/globals/node/index.d.ts"/>
import * as fs from 'fs';
import Setting from './Setting';

class JSONSetting extends Setting {

    _filePath: string = 'settings.json';
    private readonly _ext: string = 'json';

    constructor( filePath?: string ){
        super(filePath);
        if(filePath){
            this._filePath = filePath;
        }
    }

    init(): void {
        try{
            let fd = fs.openSync(this._filePath, 'a+');
            let jsonStr = fs.readFileSync(fd, { encoding: 'utf8' });
            this._config = jsonStr ? JSON.parse(jsonStr) : {};
        }catch(err){
            throw err;
        }
    }

    /*
     * Write current settings to file
     */
    flush(): void {
        fs.writeFileSync(this._filePath, JSON.stringify(this._config, null, 4));
    }
}

export default JSONSetting;