import startGame from '../index';
import fibonacci from '../math/fibonacci';
import getRandomNumber, { getUnknownNote } from '../utils';

const gameDescription = 'What is the missed member of The Fibonacci sequence?';
const fibonacciSequenceLength = 10;

const toGenerateQuestionGame = (startIndex, indexOfHiddenNumber) => {
  const generateFibonacciSequence = (sequence, counter) => {
    if (counter > fibonacciSequenceLength) return sequence;
    const newMember =
      counter !== indexOfHiddenNumber ? fibonacci(startIndex + counter) : getUnknownNote();
    return generateFibonacciSequence([...sequence, newMember], counter + 1);
  };

  return generateFibonacciSequence([], 0);
};

const getGameData = () => {
  const startIndex = getRandomNumber(1, 15);
  const indexOfHiddenMember = getRandomNumber(0, fibonacciSequenceLength - 1);
  const questionGame = toGenerateQuestionGame(startIndex, indexOfHiddenMember).join(' ');
  const correctAnswer = fibonacci(startIndex + indexOfHiddenMember).toString();
  return { questionGame, correctAnswer };
};

export default () => {
  startGame(gameDescription, getGameData);
};
