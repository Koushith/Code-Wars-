// // Assigning to an index that’s larger than the array will automatically make the array larger, with unused indexes getting the value undefined.

// // let arr = ['a', 'b', 'c', 'd'];
// // arr[5] = 10;
// // arr[4]; // empty- undefined

// // array literals
// const arr1 =     [1, 2, 3]; // array of numbers
// const arr2 = ["one", 2, "three"]; // nonhomogeneous array
// const arr3 = [[1, 2, 3], ["one", 2, "three"]]; // array containing arrays
// const arr4 = [   { name: "Fred", type: "object", luckyNumbers = [5, 7, 13] },
//  [
//  { name: "Susan", type: "object" },
//  { name: "Anthony", type: "object" },
//  ],
//  1,

//  function() { return "arrays can contain functions too"; },
//  "three",
// ];

// const arr = ["b", "c", "d"];
// arr.push("e"); // returns 4; arr is now ["b", "c", "d", "e"]
// arr.pop(); // returns "e"; arr is now ["b", "c", "d"]
// arr.unshift("a"); // returns 4; arr is now ["a", "b", "c", "d"]
// arr.shift();

// const arr = [1, 2, 3, 4, 5];

// let returned = arr.slice(1); //2,3,4,5
// console.log(arr.slice(2, 4)); // 3,4

// console.log(arr.slice(-2)); //4,5

// console.log(arr.slice(1, -2)); // 2,3

// console.log(arr.slice(-2, -1)); //4

// // ------------------------------------------------------------------------ //

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]

// SPLICE- add or remove the emement at any index.

const arr = [1, 5, 7];

// console.log(arr.splice(1, 0, 2, 3, 4)); // [1,2,3,4,5,7]
// console.log(arr.splice(5, 0, 6)); //1,2,3,4,5,6,7
// console.log(arr.splice(1, 2)); //1,4,5,6,7 returns 2 , 3
// console.log(arr.splice(2, 1, 'a', 'b')); //1,4,a,b,6,7

// const a = { 0: 1, 1: 2, 2: 3, 3: 3 };
// Array.prototype.reverse.call(a);

// console.log(a);

function reverse(array) {
  let arrayOne = array;
  let array2 = [];

  for (let i = arrayOne.length - 1; i >= 0; i--) {
    array2.push(arrayOne[i]);
  }
  return array2;
}

let arrayOne = [1, 2, 3, 4, 5];
console.log(reverse(arrayOne));
