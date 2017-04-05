import "mocha";
import * as chai from 'chai';
import YamlSetting from './YamlSetting';

const expect = chai.expect;

describe('Tests of YamlSetting', function(){
  const setting = new YamlSetting('test.yml');

  it('Expect yaml setting to have a property named config', function(){
    expect(setting).to.have.property('config');
  });
  it('Expect the type of yaml setting\'s property config is object', function(){
    expect(setting.config).to.be.a('object');
  });
  it('Expect yaml setting to have a property named filePath', function(){
    expect(setting).to.have.property('filePath');
  })
  it('Expect the type of yaml setting\'s property filePath is string', function(){
    expect(setting.filePath).to.be.a('string');
  })
})