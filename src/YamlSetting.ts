/// <reference types="node" />
import * as fs from 'fs';
import Setting from './Setting';
import yaml from 'yaml';

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
      let yamlStr = fs.readFileSync(this._filePath, { encoding: 'utf8' });
      this._config = yamlStr ? yaml.safeLoad(yamlStr) : {};
    }catch(err){
      throw err;
    }
  }

	flush(callback: Function = (() => {})): void {
		fs.writeFile(this._filePath, yaml.safeDump(this._config), callback);
	}

  /*
   * Write current settings to file
   */
  flushSync(): void {
		try{
		  fs.writeFileSync(this._filePath, yaml.safeDump(this._config));
		}catch(err){
	    throw err;
		}
  }
}