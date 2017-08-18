const fs = require('fs');

const updateFileSync = require('../../../src/fs/updateFileSync');

const ENCODING = {encoding: 'utf-8'};
const MOCK_PATH = 'any/path';
const MOCK_FILE_CONTENTS = 'readContents';

describe('updateFileSync', () => {
  beforeEach(() => {
    spyOn(fs, 'readFileSync').and.callFake(() => {
      return MOCK_FILE_CONTENTS;
    });
    spyOn(fs, 'writeFileSync').and.stub();
  });

  it('should read a path, pass file contents to callback, then write returned content', () => {
    let callbackSpy = jasmine.createSpy('callback').and.callFake((anyString) => {
      return `${anyString}-updated`;
    });

    updateFileSync(MOCK_PATH, callbackSpy);

    expect(fs.readFileSync).toHaveBeenCalledWith(MOCK_PATH, ENCODING);
    expect(callbackSpy).toHaveBeenCalledWith(MOCK_FILE_CONTENTS);
    expect(fs.writeFileSync).toHaveBeenCalledWith(MOCK_PATH, `${MOCK_FILE_CONTENTS}-updated`);
  });
}); 