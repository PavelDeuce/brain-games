import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const toGenerateQuestionGame = (startNumber, step, indexOfHiddenNumber) => {
  const progression = new Array(progressionLength);
  for (let index = 0; index < progressionLength; index += 1) {
    if (index !== indexOfHiddenNumber) {
      progression[index] = startNumber + step * index;
    } else {
      progression[index] = '..';
    }
  }
  return progression;
};

const getGameData = () => {
  const startNumber = getRandomNumber(0, 10);
  const step = getRandomNumber(0, 30);
  const indexOfHiddenNumber = getRandomNumber(0, progressionLength - 1);
  const questionGame = toGenerateQuestionGame(startNumber, step, indexOfHiddenNumber).join(' ');
  const correctAnswer = (startNumber + step * indexOfHiddenNumber).toString();
  return cons(questionGame, correctAnswer);
};

export default () => {
  startGame(gameDescription, getGameData);
};
