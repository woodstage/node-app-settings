import "mocha";
import * as chai from 'chai';
import Setting from './Setting';

const expect = chai.expect;

class Mock extends Setting {
  _filePath: string;
  constructor(filePath: string){
    super();
    this._filePath = filePath;
  }

  init(): void {

  }

  flush(): void {

  }
}

describe('Tests of Setting', function() {
  const mockSetting = new Mock('filePath');

  it('Expect mock setting to have a property named config', function(){
    expect(mockSetting).to.have.property('config');
  });
  it('Expect the type of mock setting\'s property config is object', function(){
    expect(mockSetting.config).to.be.a('object');
  });
  it('Expect mock setting to have a property named filePath', function(){
    expect(mockSetting).to.have.property('filePath');
  })
  it('Expect the type of mock setting\'s property filePath is string', function(){
    expect(mockSetting.filePath).to.be.a('string');
  })
});