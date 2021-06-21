export default (number) => {
  if (number < 2) return false;

  const limit = Math.sqrt(number);
  const checkPrime = (divider) => {
    if (divider > limit) return true;
    if (number % 2 === 0) return false;
    return checkPrime(divider + 1);
  };

  return checkPrime(2);
};
