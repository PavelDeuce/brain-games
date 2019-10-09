import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomNumber from '../utils';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const questionGame = getRandomNumber(0, 100);
  const correctAnswer = isEven(questionGame) ? 'yes' : 'no';
  return cons(questionGame, correctAnswer);
};

export default () => {
  startGame(gameDescription, getGameData);
};
