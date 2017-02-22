import "mocha";
import * as chai from 'chai';
import JSONSetting from './JSONSetting';

const expect = chai.expect;

describe('Tests of JSONSetting', function(){
  const setting = new JSONSetting('test.json');

  it('Expect json setting to have a property named config', function(){
    expect(setting).to.have.property('config');
  });
  it('Expect the type of json setting\'s property config is object', function(){
    expect(setting.config).to.be.a('object');
  });
  it('Expect json setting to have a property named filePath', function(){
    expect(setting).to.have.property('filePath');
  })
  it('Expect the type of json setting\'s property filePath is string', function(){
    expect(setting.filePath).to.be.a('string');
  })
})