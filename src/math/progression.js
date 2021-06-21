export const progressionTypes = ['arithmetic', 'geometric'];

export default (startNumber, step, type, index) => {
  const progressionTypesMap = {
    arithmetic: startNumber + step * index,
    geometric: startNumber * step ** index,
  };
  return progressionTypesMap[type] ?? null;
};
