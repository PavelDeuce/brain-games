import { bin } from '../package.json';

export default (min = 0, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

export const getAnswerDependingCallback = (callback, number) => (callback(number) ? 'yes' : 'no');
export const getUnknownNote = () => '..';

export const logCommands = () => {
  const commandsListOfAllGames = Object.keys(bin);
  const commandsString = commandsListOfAllGames
    .map((command, index) => `${index}. ${command}`)
    .join('\n');
  console.log('There is a list of available commands:');
  console.log(commandsString);
};
