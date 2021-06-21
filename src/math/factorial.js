export default (number) => {
  if (number === 0) return 1;

  const getFactorialValue = (acc, counter) => {
    if (counter === 1) return acc;
    return getFactorialValue(acc * counter, counter - 1);
  };

  return getFactorialValue(1, number);
};
