import startGame from '..';
import greatestCommonDivisor from '../math/gcd';
import getRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

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
