function cone(conesRadius, height) {
  let p = Math.PI;
  volume = ((1 / 3) * p * height * conesRadius * conesRadius).toFixed(4);
  console.log(`volume = ${volume}`);
  area = (
    p *
    conesRadius *
    (conesRadius + Math.sqrt(conesRadius * conesRadius + height * height))
  ).toFixed(4);
  console.log(`area = ${area}`);
}
cone(3, 5);
