function printAndSum(startNum, endNum) {
  let num = "";
  let sum = 0;
  for (let i = startNum; i <= endNum; i++) {
    sum += i;
    num += i + " ";
  }

  console.log(num);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
