const getIndexByRegex = require('../../../src/array/getIndexByRegex');

describe('getIndexByRegex', () => {
  [
    {testee: ['1', '2', '3', '4'], regex: /2/, expected: 1},
    {testee: ['cat', 'meow', 'swag'], regex: /swag/, expected: 2},
    {testee: ['partial match', 'bleh'], regex: /partial/, expected: 0},
    {testee: ['par', 'par', 'par'], regex: /par/, expected: 2}
  ].forEach((testCase) => {
    it(`should find last index matching ${testCase.regex}`, () => {
      let result = getIndexByRegex(testCase.testee, testCase.regex);
      expect(result).toBe(testCase.expected);
    });
  });
});