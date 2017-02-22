/// <reference types="node" />
import GeneralSetting from './GeneralSetting';
import JSONSetting from './JSONSetting';
import * as path from 'path';

const TYPES = {
  JSON: 'json',
  GENERAL: 'ini'
}

export const create = (filePath: string, type: string = TYPES.JSON) => {
  if(!filePath){
    throw new Error(`Invalid file path ${filePath}`);
  }
  
  let extname;

  try{
    extname = path.extname(filePath).substr(1);
  }catch(e){
    throw new Error(`Invalid file path ${filePath}`);
  }
  

  if(!(type in TYPES)){
    //throw new Error(`Invalid type ${type}`);
    console.warn(`Invalid setting file type ${type}, use file extension name ${extname} instead`);
    type = extname;
  }
  switch(type){
    case TYPES.JSON:
      return new GeneralSetting(filePath);
    case TYPES.GENERAL:
      return new GeneralSetting(filePath);
    default:
      console.info(`Create json type setting file for file extname ${type}`);
      return new JSONSetting(filePath); 
  }
}