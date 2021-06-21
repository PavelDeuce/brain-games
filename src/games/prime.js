import startGame from '..';
import isPrime from '../math/prime';
import getRandomNumber, { getAnswerDependingCallback } from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const questionGame = getRandomNumber(0, 100);
  const correctAnswer = getAnswerDependingCallback(isPrime, questionGame);
  return { questionGame, correctAnswer };
};

export default () => {
  startGame(gameDescription, getGameData);
};
