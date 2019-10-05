import { question } from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const countOfRounds = 3;

export const getRandomInt = (maxNumber) => Math.floor(Math.random() * Math.floor(maxNumber));

export default (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(gameDescription);

  const userName = question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  const iter = (counter) => {
    if (counter === countOfRounds) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const gameData = getGameData();
    const questionGame = car(gameData);
    const correctAnswer = cdr(gameData);

    console.log(`Question: ${questionGame}`);
    const userAnswer = question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    iter(counter + 1);
  };
  iter(0);
};
