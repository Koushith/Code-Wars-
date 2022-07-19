// let a = 5;
// let b = a;

// b++;

// console.log('a', a);
// console.log('b', b);
// console.log('a',a)

// Prove arrays are objects

let a = [1, 2, 3, 4];
console.log('a-before', a);
let b = a;

b.push('hihi');

console.log('a', a); // [1,2,3,4,hihi]  -- since it is passed by referece this should be changed;
console.log('b', b); // [1,2,3,4,hihi]

a.push('amin');

console.log('b', b); //  [1,2,3,4,hihi, amin]
console.log('a', a); //----- if you want to copy not reference- use concat method.
