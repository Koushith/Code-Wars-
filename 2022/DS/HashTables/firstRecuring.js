/**
 * given an array- [2,5,1,2,3,5,1,2,4]
 * it should return 2
 */

function firstRecuringChar(arr) {
  for (let i = 0; i < arr.length; i++) {
    //1 coz we dont want to copare same index- i+1 coz always shift right
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
} //o(n>2)

function firstRecuringChar2(arr) {
  for (let i = 0; i < arr.length; i++) {
    //1 coz we dont want to copare same index- i+1 coz always shift right
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
} //o(n>2)

console.log(firstRecuringChar2([2, 1, 1, 5, 1, 2, 3, 5, 1, 2, 4]));
