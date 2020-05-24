import startGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const toGenerateQuestionGame = (startNumber, step, indexOfHiddenNumber) => {
  const iter = (progression, counter) => {
    if (counter > progressionLength) {
      return progression;
    }

    const newItem = (counter !== indexOfHiddenNumber) ? startNumber + step * counter : '..';

    return iter([...progression, newItem], counter + 1);
  };

  return iter([], 0);
};

const getGameData = () => {
  const startNumber = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 30);
  const indexOfHiddenNumber = getRandomNumber(0, progressionLength - 1);

  const questionGame = toGenerateQuestionGame(startNumber, step, indexOfHiddenNumber).join(' ');
  const correctAnswer = (startNumber + step * indexOfHiddenNumber).toString();

  return {
    questionGame,
    correctAnswer,
  };
};

export default () => {
  startGame(gameDescription, getGameData);
};
