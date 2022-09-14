function triplesOfLetters(num) {
  let result = "";

  for (let i = 0; i < num; i++) {
    let firstletter = String.fromCharCode(97 + i);
    for (let j = 0; j < num; j++) {
      let secondletter = String.fromCharCode(97 + j);
      for (let k = 0; k < num; k++) {
        let thirdletter = String.fromCharCode(97 + k);
        result += `${firstletter}${secondletter}${thirdletter} \n`;
      }
    }
  }
  console.log(result);
}
triplesOfLetters(3);
