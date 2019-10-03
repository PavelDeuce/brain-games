#!/usr/bin/env node
import { question } from 'readline-sync';

const countOfRounds = 3;

const isEven = (number) => number % 2 === 0;
const getRandomInt = (maxNumber) => Math.floor(Math.random() * Math.floor(maxNumber));


const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no"');

  const userName = question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  const iter = (counter) => {
    if (counter === countOfRounds) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    const randomNumber = getRandomInt(100);
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';
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

brainEven();
