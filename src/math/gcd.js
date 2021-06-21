export default (operand1, operand2) => {
  const findDivisor = (divisor) =>
    operand1 % divisor === 0 && operand2 % divisor === 0 ? divisor : findDivisor(divisor - 1);

  return findDivisor(Math.min(operand1, operand2));
};
