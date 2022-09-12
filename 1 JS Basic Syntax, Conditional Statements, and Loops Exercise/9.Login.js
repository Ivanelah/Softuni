function login(arr) {
  let username = arr.shift();
  let password = username.split("").reverse().join("");

  for (let i = 0; i < arr.length; i++) {
    if (password == arr[i]) {
      console.log(`User ${username} logged in.`);
    } else {
      if (i == arr.length - 1) {
        console.log(`User ${username} blocked!`);
      } else {
        console.log(`Incorrect password. Try again.`);
      }
    }
  }
}
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
