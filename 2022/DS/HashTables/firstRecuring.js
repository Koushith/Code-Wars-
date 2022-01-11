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
} //o(n^2)

function firstRecuringChar2(arr) {
  //keys will be unique
  let map = {};
  //cal loop through the array and push, and see if the number already exists in the obj
  for (i = 0; i < arr.length; i++) {
    // as soon as we find the key that already exists, return it
    //0 eveluates to falsy value. if value doesnt exist- it returnes undefined.
    if (map[arr[i]] !== undefined) {
      //0 =2 in sample ip
      return arr[i];
    } else {
      //push it to empty obj
      map[arr[i]] = i;
    }
    console.log(map);
  }

  return undefined;
} //o(n)

console.log(firstRecuringChar2([2, 1, 2, 5, 1, 2, 3, 5, 1, 2, 4]));
