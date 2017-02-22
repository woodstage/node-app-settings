import "mocha";
import * as chai from 'chai';
import GeneralSetting from './GeneralSetting';

const expect = chai.expect;

describe('Tests of GeneralSetting', function(){
  const setting = new GeneralSetting('test.json');

  it('Expect general setting to have a property named config', function(){
    expect(setting).to.have.property('config');
  });
  it('Expect the type of general setting\'s property config is object', function(){
    expect(setting.config).to.be.a('object');
  });
  it('Expect general setting to have a property named filePath', function(){
    expect(setting).to.have.property('filePath');
  })
  it('Expect the type of general setting\'s property filePath is string', function(){
    expect(setting.filePath).to.be.a('string');
  })
})