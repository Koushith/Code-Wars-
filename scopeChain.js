// function a() {
//   function c() {
//     var b = 20;
//   }
//   c();
// }
// console.log(b);
// a();

// function f1() {
//   console.log('one');
// }
// function f2() {
//   console.log('two');
// }
// f2();
// f1();
// f2();

// const x = 3;
// function f() {
//   console.log(x); // this will work
//   console.log('y', y); // this will cause a crash
// }
// const y = 3;
// f();

// let name = 'Irena'; // global
// let age = 25; // global
// function greet() {
//   console.log(`Hello, ${name}!`);
// }
// function getBirthYear() {
//   return new Date().getFullYear() - age;
// }

// greet();
// console.log(getBirthYear());

// let user = {
//   name: 'Irena',
//   age: 25,
// };

// function greet(user) {
//   console.log(`Hello, ${user.name}!`);
// }
// function getBirthYear(user) {
//   return new Date().getFullYear() - user.age;
// }

// greet(user);
// console.log(getBirthYear(user));
