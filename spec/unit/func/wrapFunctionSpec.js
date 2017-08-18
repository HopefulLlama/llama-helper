const wrapFunction = require('../../../src/func/wrapFunction');


const MOCK_FUNCTION = jasmine.createSpy('functionToBeWrapped');

describe('wrapFunction', () => {
  it('should wrap the function, first with config, then with versionMetadata and done()', () => {
    let wrapping = wrapFunction(MOCK_FUNCTION);

    const CONFIG = {mock: 'CONFIG'};
    wrapping = wrapping(CONFIG);

    const VERSION_METADATA = {mock: 'VERSION_METADATA'};
    const DONE = () => {};
    wrapping = wrapping(VERSION_METADATA, DONE);

    expect(MOCK_FUNCTION).toHaveBeenCalledWith(VERSION_METADATA, CONFIG, DONE);
  });
});