function triangleArea(a, b, c) {
  let area =
    (1 / 4) *
    Math.sqrt(
      4 * Math.pow(a, 2) * Math.pow(b, 2) -
        Math.pow(Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2), 2)
    );
  console.log(area);
}
triangleArea(2, 3.5, 4);
