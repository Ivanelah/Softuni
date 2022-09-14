function requiredReading(pages, pagesPerHour, days) {
  let pagesPerDay = pages / days;
  let neededHours = pagesPerDay / pagesPerHour;
  console.log(neededHours);
}
requiredReading(212, 20, 2);


