import startGame from '../index';
import factorial from '../math/factorial';
import getRandomNumber, { getUnknownNote } from '../utils';

const gameDescription = 'What is the factorial of the number?';

const getGameData = () => {
  const factorialNumber = getRandomNumber(0, 7);
  const questionGame = `${factorialNumber}! = ${getUnknownNote()}`;
  const correctAnswer = factorial(factorialNumber).toString();
  return { questionGame, correctAnswer };
};

export default () => {
  startGame(gameDescription, getGameData);
};
