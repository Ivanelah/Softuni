function sumDigits(num) {
  let numAsString = num.toString();
  let sum = 0;
  for (digit of numAsString) {
    sum += Number(digit);
  }
  console.log(sum);
}
sumDigits(245678);
