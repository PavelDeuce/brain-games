import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const questionGame = getRandomNumber(0, 100);
  const correctAnswer = isPrime(questionGame) ? 'yes' : 'no';
  return cons(questionGame, correctAnswer);
};

export default () => {
  startGame(gameDescription, getGameData);
};
