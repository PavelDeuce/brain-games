import { question } from 'readline-sync';

const roundsCount = 3;

export default (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(gameDescription);

  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  const playGameRound = (counter) => {
    if (counter === roundsCount) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    const gameData = getGameData();
    const { questionGame, correctAnswer } = gameData;

    console.log(`Question: ${questionGame}`);
    const userAnswer = question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.\n`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    playGameRound(counter + 1);
  };

  playGameRound(0);
};
