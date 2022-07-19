// function same1(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   //   loops over array1-
//   for (let val of arr1) {
//     //   adding the prop to frequency counter
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     console.log('freqCounterValue', frequencyCounter1[val]);
//   }

//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }

//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   //   values check after adding props
//   console.log('freq-1- after', frequencyCounter1);
//   console.log('freq-2- after', frequencyCounter2);
//   return true;
// }

//console.log(same1([1, 2, 3, 2], [9, 1, 4, 4]));

function anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};
  console.log(lookup);
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exist, inc orelse set it to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //   cant find the letter or letter is zero then its not anagram

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

anagram('silent', 'listen');
