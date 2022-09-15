function spiceMustFlow(startingYield) {
  dayCounter = 0;
  spiceExtracted = 0;

  while (startingYield >= 100) {
    dayCounter += 1;
    spiceExtracted += startingYield - 26;
    startingYield -= 10;
  }
  console.log(dayCounter);
  if (dayCounter != 0 && spiceExtracted >= 26) {
    console.log(spiceExtracted - 26);
  } else {
    console.log(spiceExtracted);
  }
}
spiceMustFlow(111);
