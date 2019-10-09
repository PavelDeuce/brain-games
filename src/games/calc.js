import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

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

const getGameData = () => {
  const operand1 = getRandomNumber(0, 100);
  const operand2 = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, operators.length)];
  const questionGame = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = toCalculate(operand1, operand2, operator).toString();
  return cons(questionGame, correctAnswer);
};

export default () => {
  startGame(gameDescription, getGameData);
};
