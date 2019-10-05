#!/usr/bin/env node
import { question } from 'readline-sync';

const countOfRounds = 3;

const getRandomInt = (maxNumber) => Math.floor(Math.random() * Math.floor(maxNumber));
const toFindLargestDivisor = (operand1, operand2) => {
  if (operand2 === 0) {
    return Math.abs(operand1);
  }
  return toFindLargestDivisor(operand2, operand1 % operand2).toString();
};

const brainGcd = () => {
  console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.');

  const userName = question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  const iter = (counter) => {
    if (counter === countOfRounds) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const operand1 = getRandomInt(100);
    const operand2 = getRandomInt(100);
    console.log(`Question: ${operand1} ${operand2}`);
    const correctAnswer = toFindLargestDivisor(operand1, operand2);
    const userAnswer = question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(counter + 1);
  };
  iter(0);
};

brainGcd();
