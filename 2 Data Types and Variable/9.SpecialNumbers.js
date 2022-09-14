function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let a = i.toString();
    let sum = 0;
    let special;
    for (let j = 0; j < a.length; j++) {
      sum = sum + Number(a[j]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      special = "True";
    } else {
      special = "False";
    }

    console.log(i + " -> " + special);
  }
}
specialNumbers(15);
