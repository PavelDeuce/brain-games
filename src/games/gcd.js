import { cons } from '@hexlet/pairs';
import startGame from '..';

const getRandomInt = (maxNumber) => Math.floor(Math.random() * Math.floor(maxNumber));

const gameDescription = 'Find the greatest common divisor of given numbers.';

const toFindLargestDivisor = (operand1, operand2) => {
  if (operand2 === 0) {
    return Math.abs(operand1);
  }
  return toFindLargestDivisor(operand2, operand1 % operand2).toString();
};

const getGameData = () => {
  const operand1 = getRandomInt(100);
  const operand2 = getRandomInt(100);
  const questionGame = `${operand1} ${operand2}`;
  const correctAnswer = toFindLargestDivisor(operand1, operand2);
  return cons(questionGame, correctAnswer);
};

export default () => {
  startGame(gameDescription, getGameData);
};
