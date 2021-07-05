import isNumber from 'lodash/isNumber';
import getRandomNumber, { getUnknownNote, getAnswerDependingCallback } from '../src/utils';

describe('utils', () => {
  test('getRandomNumber', () => {
    const minLimit = 5;
    const maxLimit = 10;
    const randomNumber = getRandomNumber(minLimit, maxLimit);
    expect(isNumber(randomNumber)).toBeTruthy();
    expect(randomNumber).toBeLessThanOrEqual(maxLimit);
    expect(randomNumber).toBeGreaterThanOrEqual(minLimit);

    const randomNumber2 = getRandomNumber();
    expect(randomNumber2).toBeLessThanOrEqual(100);
    expect(randomNumber2).toBeGreaterThanOrEqual(0);
  });

  test('getAnswerDependingCallback', () => {
    const testNumber = 50;
    const negativeCallback = (number) => number > 999;
    const positiveCallback = (number) => number < 999;
    expect(getAnswerDependingCallback(negativeCallback, testNumber)).toBe('no');
    expect(getAnswerDependingCallback(positiveCallback, testNumber)).toBe('yes');
  });

  test('getUnknownNote', () => {
    const unknownNote = '..';
    expect(getUnknownNote()).toBe(unknownNote);
  });
});
