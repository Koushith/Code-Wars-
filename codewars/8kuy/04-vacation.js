/**
 * After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
 */

function rentalCarCost(d) {
  // Your solution here

  //   7> days -50$ off

  // 3 - 7 days 20$ off

  // alse no discount

  let dayRent = 40;
  let totalAmt = 0;

  if (d >= 7) {
    totalAmt = dayRent * d - 50;
  } else if (d >= 3) {
    totalAmt = dayRent * d - 20;
  } else {
    totalAmt = dayRent * d;
  }
  return totalAmt;
}

//or

const rentalCarCost = (d) => d * 40 - ((d > 6) * 50 || (d > 2) * 20);

function rentalCarCost(d) {
  let amount,
    dayRent = 40;
  return d >= 7 ? d * dayRent - 50 : d >= 3 ? d * dayRent - 20 : d * dayRent;
}
