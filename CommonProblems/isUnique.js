/**
 * function that determines all charaters are unique- non case-sensiive- 'a' and 'A' should pass the test
 */

// solution -1
/*
function isUnique(str) {
  for (i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) return false;
  }
  return true;
}
*/

// solution-2

// function isUnique(str) {
//   let chars = str.split('').sort();

//   // this spits into array and its sorted. lets say aabbcc
// // start with one- coz sorted ele will be togather-
//   for (let i = 1; i < chars.length; i++) {
//     if (chars[i] === chars[i - 1]) return false;
//     return true;
//   }
//   console.log(chars);
// }

//solution-3

function isUnique(str) {
  let chars = {};

  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i];

    if (chars[thisChar] === true) {
      return false;
    }
    chars[thisChar] = true;
  }
  return true;
}

console.log(isUnique('abcdef'));
console.log(isUnique('aabbcde'));
console.log(isUnique('125789'));
console.log(isUnique('2a2b2c'));
