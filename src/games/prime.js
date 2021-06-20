import startGame from '..';
import getRandomNumber, { getAnswerDependingCallback } from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const limit = Math.sqrt(number);

  if (number < 2) {
    return false;
  }

  const checkPrime = (divider) => {
    if (divider > limit) {
      return true;
    }

    if (number % 2 === 0) {
      return false;
    }

    return checkPrime(divider + 1);
  };

  return checkPrime(2);
};

const getGameData = () => {
  const questionGame = getRandomNumber(0, 100);
  const correctAnswer = getAnswerDependingCallback(isPrime, questionGame);

  return { questionGame, correctAnswer };
};

export default () => {
  startGame(gameDescription, getGameData);
};
