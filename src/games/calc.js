import startGame from '..';
import calculate, { operators } from '../math/calc';
import getRandomNumber, { getUnknownNote } from '../utils';

const gameDescription = 'What is the result of the expression?';

const getGameData = () => {
  const operand1 = getRandomNumber(0, 100);
  const operand2 = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const questionGame = `${operand1} ${operator} ${operand2} = ${getUnknownNote()}`;
  const correctAnswer = calculate(operand1, operand2, operator).toString();
  return { questionGame, correctAnswer };
};

export default () => {
  startGame(gameDescription, getGameData);
};
