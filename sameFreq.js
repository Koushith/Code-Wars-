// fn that accepts 2 arrays - this should return true if every value in array has its corresponding value squared in second array. frequesncy of values must be same

//  same([1,2,3],[1,4,9] ) //true- order and freq is same
//  same([1,2,3],[1,9]) //false- not same length
// same([1,2,1], [4,4,1]) // false - frequesncy is not same(should be squares)

// working solution

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let currentIndex = arr2.indexOf(arr1[i] ** 2);

    if (currentIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(currentIndex, 1);
  }

  return true;
}
//console.log(same([1, 2, 3], [1, 9, 4]));
// n square- time complexity

function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //   loops over array1-
  for (let val of arr1) {
    //   adding the prop to frequency counter
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    console.log('freqCounterValue', frequencyCounter1[val]);
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  //   values check after adding props
  console.log('freq-1- after', frequencyCounter1);
  console.log('freq-2- after', frequencyCounter2);
  return true;
}

console.log(same1([1, 2, 3, 2], [9, 1, 4, 4]));
