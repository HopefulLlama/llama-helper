const array = require('../../../src/array/array');

describe('array', () => {
  ['getIndexByRegex'].forEach((thing) => {
    it(`should have ${thing}`, () => {
      expect(array[thing]).not.toBe(undefined);
    });
  });
});