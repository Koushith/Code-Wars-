// //function that add n natural numner

// // const getSum = (n) => {
// //   //   return (total = (n * (n + 1)) / 2);
// //   let total = 0;

// //   for (let i = 1; i <= n; i++) {
// //     total += i;
// //   }

// //   return total;
// // };

// // // before running -

// // var t1 = performance.now();
// // console.log(getSum(100));
// // var t2 = performance.now();

// // console.log(`Time Elapsed: ${t1 - t2 / 1000} seconds`);
// // console.log('hello');

// const sum = (arr) => {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   console.log(total);
// };

// let array = [1, 2, 3, 4, 5];

// sum(array);

// // double

// let double = array.map((double) => {
//   return double * 2;
// });

// console.log('double', double);

// function doub(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2);
//   }

//   return newArr;
// }

// console.log('reg ', doub(array));

function charCount(str) {
  // make object  to return at end

  let result = {};

  // loop ober a string, for each vharater

  for (let i = 0; i < str.length; i++) {
    // if the char is a nu,ber,letter and is a key in object, add one to the count
    let char = str[i];

    if (result[char] > 0) {
      result[char]++;
    }

    // if the char is a number ,letter abd not key in object, add it to object and set the value to 1
    else {
      result[char] = 1;
    }
  }

  // if the char is something else (space, peropd etc) dont do anhthing

  // return the object at end

  return result;
}
console.log(charCount('Hellooo ass!!'));
