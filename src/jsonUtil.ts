// <reference path="typings/globals/node/index.d.ts"/>
import * as f from 'fs';
import * as Promise from 'bluebird';

let fs = Promise.promisifyAll(f);

export function removeBom(filePath: string){
    return fs.readFileAsync(filePath).then(buff => {
    if(buff[0].toString(16).toLowerCase() === 'ef' && buff[1].toString(16).toLowerCase() === 'bb' && buff[2].toString(16).toLowerCase() === 'bf'){
      console.log('%s has bom headers', filePath)
      buff = buff.slice(3)
      return fs.writeFileAsync(filePath, buff.toString(), 'utf8')
    }
      return
  })
}
