#!/usr/bin/env node
import { question } from 'readline-sync';

const countOfRounds = 3;

const operators = ['+', '-', '*'];
const getRandomInt = (maxNumber) => Math.floor(Math.random() * Math.floor(maxNumber));
const toCalculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

const brainCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');

  const userName = question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  const iter = (counter) => {
    if (counter === countOfRounds) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const operand1 = getRandomInt(100);
    const operand2 = getRandomInt(100);
    const operator = operators[getRandomInt(3)];
    console.log(`Question: ${operand1} ${operator} ${operand2}`);
    const correctAnswer = toCalculate(operand1, operand2, operator).toString();
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

brainCalc();
