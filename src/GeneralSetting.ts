/// <reference types="node" />
import * as fs from 'fs';
import * as ini from 'ini';
import Setting from './Setting';

class GeneralSetting extends Setting{

    _filePath: string = 'settings.ini';
    private readonly _ext: string = 'ini';

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
            this._config = ini.parse(fs.readFileSync(this._filePath, { encoding: 'utf8' }));
        }catch(err){
            throw err;
        }
    }

    /*
     * Write current settings to file
     */
    flush(): void {
        fs.writeFileSync(this._filePath, ini.stringify(this._config));
    }
}

export default GeneralSetting;
