export default (min = 0, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

export const getAnswerDependingCallback = (callback, number) => (callback(number) ? 'yes' : 'no');
