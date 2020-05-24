import startGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const limit = Math.sqrt(number);

  if (number < 2) {
    return false;
  }

  const iter = (divider) => {
    if (divider > limit) {
      return true;
    }

    if (number % 2 === 0) {
      return false;
    }

    return iter(divider + 1);
  };

  return iter(2);
};

const getGameData = () => {
  const questionGame = getRandomNumber(0, 100);
  const correctAnswer = isPrime(questionGame) ? 'yes' : 'no';

  return {
    questionGame,
    correctAnswer,
  };
};

export default () => {
  startGame(gameDescription, getGameData);
};
