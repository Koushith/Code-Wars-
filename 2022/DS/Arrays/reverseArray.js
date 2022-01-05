/**
 * reverse a string-
 *
 * 1- convert into array
 * 2- create an empty array
 * 3- loop reverese and push to empty array
 *
 * or
 *
 * use builtin methods
 */

function reverseSting(str) {
  let reversed = [];

  for (i = str.length; i >= 0; i--) {
    reversed.push(str[i]);
  }
  console.log(reversed);
  return reversed.join(' ');
}

function stringRev(str) {
  return str.split('').reverse().join('');
}

console.log(stringRev('koushith'));
