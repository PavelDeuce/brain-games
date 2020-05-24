import startGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const questionGame = getRandomNumber(0, 100);
  const correctAnswer = isEven(questionGame) ? 'yes' : 'no';

  return {
    questionGame,
    correctAnswer,
  };
};

export default () => {
  startGame(gameDescription, getGameData);
};
