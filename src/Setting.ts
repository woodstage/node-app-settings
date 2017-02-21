///<reference types="node" path="../typings/globals/node/index.d.ts"/>
import * as fs from 'fs';

abstract class Setting {

    _filePath: string;
    _config: object = {};

    constructor(filePath?: string) {
        if(filePath){
            this._filePath = filePath;
        }
    }

    abstract init(): void;
    abstract flush(): void;

    get filePath(): string {
        return this._filePath;
    }

    get config(): Object {
        return this._config;
    }

    set config(obj: Object): void {
        this._config = obj;
    }
}

export default Setting;
