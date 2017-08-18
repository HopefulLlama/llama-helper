const LlamaHelper = require('../../src/llama-helper');

describe('llama-helper', () => {
  ['array', 'fs', 'func'].forEach((namespace) => {
    it(`should have ${namespace} as a namespace`, () => {
      expect(LlamaHelper[namespace]).not.toBe(undefined);
    });
  });
});