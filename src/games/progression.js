import { cons } from '@hexlet/pairs';
import startGame from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getRandomInt = (maxNumber) => Math.floor(Math.random() * Math.floor(maxNumber));

const toGenerateProgression = (startNumber, step, hiddenNumber) => {
  const progression = new Array(progressionLength);
  for (let index = 0; index < progressionLength; index += 1) {
    if (index !== hiddenNumber) {
      progression[index] = startNumber + step * index;
    } else {
      progression[index] = '..';
    }
  }
  return progression;
};

const getGameData = () => {
  const startNumber = getRandomInt(10);
  const step = getRandomInt(30);
  const hiddenNumber = getRandomInt(progressionLength - 1);
  const questionGame = toGenerateProgression(startNumber, step, hiddenNumber).join(' ');
  const correctAnswer = (startNumber + step * hiddenNumber).toString();
  return cons(questionGame, correctAnswer);
};

export default () => {
  startGame(gameDescription, getGameData);
};
