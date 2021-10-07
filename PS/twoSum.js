// retun - when the sum is 0- sorted array-thisis on**2

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j > arr.length; i++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

//refactord sol

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // dec right pointer to one
      right--;
    } else {
      // inc left pointer
      left++;
    }
  }
}
//console.log(sumZero([-4, -3, -2, -1, 0, 1, 3, 2, 10]));

// count unique values- accepts sorted array and counts the unique values in the array. there can be negative numbers- but it will be always sorted.

// eg- [1,1,1,1,1,1,1,2]  returns 2

function countUniqueValues(arr) {
  // let left=0;
  // let right=arr.length-1;
  if (arr.length === 0) return 0;

  var i = 0;

  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues(1, 1, 1, 1, 1, 1, 2, 3));
