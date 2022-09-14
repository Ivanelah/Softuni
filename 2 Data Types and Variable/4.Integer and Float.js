function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let sumAsString = sum.toString();

  if (sumAsString.includes(".")) {
    console.log(`${sum} - Float`);
  } else {
    console.log(`${sum} - Integer`);
  }
}
integerAndFloat(9, 100, 1.1);

