// // function x() {
// //   for (var i = 1; i <= 5; i++) {
// //     function cl(x) {
// //       setTimeout(() => {
// //         console.log(x);
// //       }, x * 1000);
// //     }
// //     cl(i);
// //   }

// //   console.log('hii');
// // }

// // x();
// //

// let globalFunction;
// {
//   let blockVar = 'a';
//   globalFunction = function () {
//     console.log(blockVar);
//   };
// }

// // globalFunction();

// let f;

// {
//   let o = { note: 'safe' };
//   f = function () {
//     return o;
//   };
// }

// let oRef = f();
// oRef.note = 'not safe it is modified';
// // console.log((oRef.note = 100));

// let b = 3;

// function impure(a) {
//   return a + b;
// }

// console.log('fn- ', impure(2));

// console.log('b', b);

// global scope
// var e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4));

// Initiate counter
// let counter = 0;

// Function to increment counter
// function add() {
//   let counter = 0;
//   counter += 1;
//   console.log('inner', counter);
// }

// Call add() 3 times
// console.log(add());
// console.log(add());
// console.log(add());

// console.log('oyter', counter);

// function add() {
//   let counter = 0;
//   function plus() {
//     counter += 1;
//   }
//   plus();
//   return counter;
// }

// console.log(add());

// let name = 'koushith';

// const myName = () => {
//   // let name = 'preetham';
//   // console.log(name);
// };

// myName();

console.log(name);
