abstract class Setting {

    _filePath: string;
    _config: Object = {};

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

    set config(obj: Object) {
        this._config = obj;
    }
}

export default Setting;
