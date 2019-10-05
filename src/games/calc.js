import { cons } from '@hexlet/pairs';
import startGame from '..';

const gameDescription = 'What is the result of the expression?';

const getRandomInt = (maxNumber) => Math.floor(Math.random() * Math.floor(maxNumber));
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
  const operand1 = getRandomInt(100);
  const operand2 = getRandomInt(100);
  const operator = operators[getRandomInt(3)];
  const questionGame = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = toCalculate(operand1, operand2, operator).toString();
  return cons(questionGame, correctAnswer);
};

export default () => {
  startGame(gameDescription, getGameData);
};
