import startGame from '..';
import calculateProgressionItem, { progressionTypes } from '../math/progression';
import getRandomNumber, { getUnknownNote } from '../utils';

const gameDescription = 'What number is missed in the progression?';
const progressionLength = 7;

const toGenerateQuestionGame = (startNumber, step, type, indexOfHidden) => {
  const buildProgression = (progression, counter) => {
    if (counter > progressionLength) return progression;
    const newItem =
      counter !== indexOfHidden
        ? calculateProgressionItem(startNumber, step, type, counter)
        : getUnknownNote();

    return buildProgression([...progression, newItem], counter + 1);
  };

  return buildProgression([], 0);
};

const getGameData = () => {
  const [arithmetic] = progressionTypes;
  const type = progressionTypes[getRandomNumber(0, progressionTypes.length - 1)];
  const startNumber = getRandomNumber(1, type === arithmetic ? 100 : 4);
  const step = getRandomNumber(2, type === arithmetic ? 30 : 7);
  const indexOfHidden = getRandomNumber(1, progressionLength - 1);

  const questionGame = toGenerateQuestionGame(startNumber, step, type, indexOfHidden).join(' ');
  const correctAnswer = calculateProgressionItem(startNumber, step, type, indexOfHidden).toString();

  return { questionGame, correctAnswer };
};

export default () => {
  startGame(gameDescription, getGameData);
};
