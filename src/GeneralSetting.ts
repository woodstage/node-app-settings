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

	flush(callback: Function = (() => {})): void {
		fs.writeFile(this._filePath, ini.stringify(this._config), callback);
	}

    /*
     * Write current settings to file
     */
    flushSync(): void {
		try{
			fs.writeFileSync(this._filePath, ini.stringify(this._config));
		}catch(err){
			throw err;
		}
    }
}

export default GeneralSetting;
