function primerNumberChecker(num) {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
    }
  }
  if (flag == true) {
    console.log("true");
  } else {
    console.log("false");
  }
}
primerNumberChecker(7);
primerNumberChecker(6);
