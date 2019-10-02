import { question } from 'readline-sync';

export default () => {
    const userName = question(`\nMay I have your name? `);
    console.log(`Hello, ${userName}\n`);
};
