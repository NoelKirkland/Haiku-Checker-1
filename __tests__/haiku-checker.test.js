import { syllableCheck } from './../src/haiku-checker.js'
const { TestScheduler } = require("jest")

describe('syllableCheck', () => {
  test('should check the number of vowels in a word', () => {
    expect(syllableCheck("him")).toEqual(1);
  });
});