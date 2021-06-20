import startGame from '../index';
import getRandomNumber, { getUnknownNote } from '../utils';

const gameDescription = 'What is the factorial of the number?';

const factorial = (number) => {
  if (number === 0) return 1;

  const getFactorialValue = (acc, counter) => {
    if (counter === 1) return acc;
    return getFactorialValue(acc * counter, counter - 1);
  };

  return getFactorialValue(1, number);
};

const getGameData = () => {
  const factorialNumber = getRandomNumber(0, 7);

  const questionGame = `${factorialNumber}! = ${getUnknownNote()}`;
  const correctAnswer = factorial(factorialNumber).toString();

  return { questionGame, correctAnswer };
};

export default () => {
  startGame(gameDescription, getGameData);
};
