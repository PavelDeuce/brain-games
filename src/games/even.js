import startGame from '..';
import isEven from '../math/even';
import getRandomNumber, { getAnswerDependingCallback } from '../utils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const questionGame = getRandomNumber(0, 100);
  const correctAnswer = getAnswerDependingCallback(isEven, questionGame);
  return { questionGame, correctAnswer };
};

export default () => {
  startGame(gameDescription, getGameData);
};
