function rightPlace(word, char, correctWord) {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "_") {
      result += char;
    } else {
      result += word[i];
    }
  }
  if (result == correctWord) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "I", "Strong");

//You will receive 3 parameters (string, char, string).
//The first string will be a word with a missing char replaced with an underscore '_'.
//You have to replace the missing character (underscore) of the first string with the character
// passed as the second parameter and compare the result with the second string.
//If they are equals, you should print "Matched", otherwise print "Not Matched".
