import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (operand1, operand2) => {
  if (operand2 === 0) {
    return Math.abs(operand1);
  }
  return greatestCommonDivisor(operand2, operand1 % operand2).toString();
};

const getGameData = () => {
  const operand1 = getRandomNumber(0, 100);
  const operand2 = getRandomNumber(0, 100);
  const questionGame = `${operand1} ${operand2}`;
  const correctAnswer = greatestCommonDivisor(operand1, operand2);
  return cons(questionGame, correctAnswer);
};

export default () => {
  startGame(gameDescription, getGameData);
};
