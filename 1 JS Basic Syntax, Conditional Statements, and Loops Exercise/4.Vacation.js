function vacation(group, type, day) {
  totalsum = 0;
  if (type == "Students") {
    if (day == "Friday") {
      totalsum += 8.45 * group;
    } else if (day == "Saturday") {
      totalsum += 9.8 * group;
    } else if (day == "Sunday") {
      totalsum += 10.46 * group;
    }
    if (group >= 30) {
      totalsum = totalsum * 0.85;
    }
  }

  if (type == "Business") {
    if (group >= 100) {
      group -= 10;
    }
    if (day == "Friday") {
      totalsum += 10.9 * group;
    } else if (day == "Saturday") {
      totalsum += 15.6 * group;
    } else if (day == "Sunday") {
      totalsum += 16 * group;
    }
  }

  if (type == "Regular") {
    if (day == "Friday") {
      totalsum += 15 * group;
    } else if (day == "Saturday") {
      totalsum += 20 * group;
    } else if (day == "Sunday") {
      totalsum += 22.5 * group;
    }
    if (group >= 10 && group <= 20) {
      totalsum = totalsum * 0.95;
    }
  }

  console.log(`Total price: ${totalsum.toFixed(2)}`);
}

vacation(40, "Regular", "Saturday");
