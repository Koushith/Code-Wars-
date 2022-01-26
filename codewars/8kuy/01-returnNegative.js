/**
 * In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 */

/**
 *
 * @param {*} num
 * @returns -ve
 */
function makeNegative(num) {
  // Code?
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

// second solution

function makeNegative1(num) {
  return num > 0 ? -num : num;
}

// alternative

function makeNegative(num) {
  return Math.abs(num) * -1;
}

console.log(makeNegative1(10));