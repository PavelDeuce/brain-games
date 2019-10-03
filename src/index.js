import { question } from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);
};
