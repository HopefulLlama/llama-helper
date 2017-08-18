const fs = require('../../../src/fs/fs');

describe('fs', () => {
  ['updateFileSync'].forEach((thing) => {
    it(`should have ${thing}`, () => {
      expect(fs[thing]).not.toBe(undefined);
    });
  });
});