const func = require('../../../src/func/func');

describe('func', () => {
  ['wrapFunction'].forEach((thing) => {
    it(`should have ${thing}`, () => {
      expect(func[thing]).not.toBe(undefined);
    });
  });
});