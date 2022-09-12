function triangleOfNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let x = " " + i;
    console.log(x.repeat(i));
  }
}

triangleOfNumbers(3);
