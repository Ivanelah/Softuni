function amazingNumbers(num) {
  let numAsString = num.toString();
  let sum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
  }
  let sumAsString = sum.toString();

  if (sumAsString.includes(9)) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`);
  }
}

amazingNumbers(9939);

//Write a function, which as input will receive a number.
//Check and print if it is amazing or not into the following format:
//"{number} Amazing? {True or False}"
//An amazing number includes the digit 9 the sum of its digits.
//Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)
