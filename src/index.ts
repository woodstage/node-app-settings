import GeneralSetting from './GeneralSetting';
import JSONSetting from './JSONSetting';
import * as path from 'path';

let TYPES = {
  JSON: 'JSON',
  GENERAL: 'GENERAL'
}

export function create(filePath: string, type: string = TYPES.JSON){
  if(!(type in TYPES)){
    throw new Error(`Invalid type ${type}`);
  }
  switch(type){
    case TYPES.GENERAL:
      return new GeneralSetting(filePath);
    default:
      return new JSONSetting(filePath); 
  }
}