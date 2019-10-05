import { cons } from '@hexlet/pairs';
import startGame from '..';

const isEven = (number) => number % 2 === 0;
const getRandomInt = (maxNumber) => Math.floor(Math.random() * Math.floor(maxNumber));

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const questionGame = getRandomInt(100);
  const correctAnswer = isEven(questionGame) ? 'yes' : 'no';
  return cons(questionGame, correctAnswer);
};

export default () => {
  startGame(gameDescription, getGameData);
};
