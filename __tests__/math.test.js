import calculateProgressionItem, { progressionTypes } from '../src/math/progression';
import calculate, { operators } from '../src/math/calc';
import greatestCommonDivisor from '../src/math/gcd';
import fibonacci from '../src/math/fibonacci';
import factorial from '../src/math/factorial';
import isPrime from '../src/math/prime';
import isEven from '../src/math/even';

describe('math', () => {
  test('calculate', () => {
    const number1 = 10;
    const number2 = 15;
    const [plus, minus, multiply] = operators;
    expect(calculate(number1, number2, plus)).toBe(25);
    expect(calculate(number2, number1, minus)).toBe(5);
    expect(calculate(number1, number2, multiply)).toBe(150);
    expect(calculate(number1, number2, '#')).toBeNull();
  });

  test('isEven', () => {
    expect(isEven(0)).toBeTruthy();
    expect(isEven(6)).toBeTruthy();
    expect(isEven(5)).toBeFalsy();
  });

  test('isPrime', () => {
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(150)).toBeFalsy();
  });

  test('greatestCommonDivisor', () => {
    expect(greatestCommonDivisor(3, 9)).toBe(3);
    expect(greatestCommonDivisor(100, 1000)).toBe(100);
    expect(greatestCommonDivisor(0, 0)).toBe(-1);
    expect(greatestCommonDivisor(-5, -5)).toBe(-5);
  });

  test('fibonacci', () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(10)).toBe(55);
  });

  test('factorial', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(3)).toBe(6);
    expect(factorial(5)).toBe(120);
    expect(factorial(7)).toBe(5040);
  });

  test('calculateProgressionItem', () => {
    const [arithmetic, geometric] = progressionTypes;
    const step = 5;
    const index = 3;
    expect(calculateProgressionItem(0, step, arithmetic, index)).toBe(15);
    expect(calculateProgressionItem(2, step, geometric, index)).toBe(250);
    expect(calculateProgressionItem(0, step, 'unknown', index)).toBeNull();
  });
});
