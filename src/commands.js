import { bin } from '../package.json';

export default () => {
  const commandsListOfAllGames = Object.keys(bin);
  const commandsString = commandsListOfAllGames
    .map((command, index) => `${index}. ${command}`)
    .join('\n');
  console.log('Welcome to the Brain Games!');
  console.log('There is a list of available commands:');
  console.log(commandsString);
};
