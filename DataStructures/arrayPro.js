// const a = ['b', 'c', 'd'];

// // const arr2 = arr.push(2, 3, 9);
// // console.log(arr);
// // console.log(arr2);

// /**
//  * slic- retirns  shalow copy- sub array
//  */

// // const arr = [1, 2, 3, 4, 5];
// // arr.slice(3); // 4 5
// // arr.slice(2, 4); // 3 4
// // arr.slice(-2); // 4 5
// // arr.slice(1, -2); // 2 3
// // arr.slice(-2, -1); // 4

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// //2 - 3

// //console.log(animals.slice(1, 4)); // bison camel duck

// const animals2 = animals.slice();

// // console.log(animals === animals2);

// const students = [
//   { name: 'koushith', age: 23 },
//   { name: 'preetham', age: 19 },
//   { name: 'rachana', age: 23 },
// ];

// const studCopy = [...students];

// // console.log('original students', students);

// // console.log('copy students', studCopy);

// // console.log(studCopy === students);

// const arr = [1, 5, 7];
// arr.splice(1, 0, 2, 3, 4); // 1,2,3,4,5,7
// arr.splice(5, 0, 6); //1,2,3,4,5,6,7
// arr.splice(1, 2); // 1,4,5,6,7
// arr.splice(2, 1, 'a', 'b'); // 1,4,a,b,6,7

// const arr2 = [1, 2, 3, 4, 5, 7, 12, 15, 46, 2, 'a', 'b'];
// console.log(arr2.reverse());

const arr = [{ name: 'Suzanne' }, { name: 'Jim' }, { name: 'Trevor' }, { name: 'Amanda' }];

console.log(
  'sort alpha',
  arr.sort((a, b) => a.name > b.name)
);

const points = [40, 100, 1, 5, 25, 10];
const sorted = points.sort(function (a, b) {
  console.log('a', a);
  console.log('b', b);
  return a - b;
});

console.log('sorted', sorted);
