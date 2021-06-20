import startGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (operand1, operand2) => {
  const findDivisor = (divisor) =>
    operand1 % divisor === 0 && operand2 % divisor === 0 ? divisor : findDivisor(divisor - 1);

  return findDivisor(Math.min(operand1, operand2));
};

const getGameData = () => {
  const operand1 = getRandomNumber(0, 100);
  const operand2 = getRandomNumber(0, 100);

  const questionGame = `${operand1} ${operand2}`;
  const correctAnswer = greatestCommonDivisor(operand1, operand2);

  return { questionGame, correctAnswer };
};

export default () => {
  startGame(gameDescription, getGameData);
};
