// const object1 = {
//   name: 'koushith',
//   age: 23,
// };

// const object2 = object1;

// console.log('obj2', object2);

// console.log('checking equal', object2 === object1); // true

// object2.company = 'consenso labs';

// console.log('checking after adding', object2); //-  {name: 'koushith', age: 23, company: 'consenso labs' }

// console.log('checking equal- after modifing', object2 === object1); // true
// console.log('obj1', object1); // obj1 { name: 'koushith', age: 23, company: 'consenso labs' } - coz both obj1 amd obj2 points to same memory location

// delete object2.age;

// console.log('after deleting obj1', object1);

let obj1 = { a: true };
let obj2 = obj1;

console.log('obj2', obj2); //{a:true}

console.log(obj1 === obj2); //true- coz it is pointing to same memory

obj2.name = 'koushith';

console.log('after adding name to obj 2', obj2); //{ a: true, name: 'koushith' }
console.log('after adding to obj 2- obj a', obj1); // { a: true, name: 'koushith' } - same reason

delete obj1;

console.log('after deleting obj1', obj1); //  { a: true, name: 'koushith' }
console.log('after deleteing obj 1', obj2); // { a: true, name: 'koushith' }- coz we deleted obj1- and obj2 will be in that place

delete obj2.a;

console.log('after deleting obj2.a', obj2); //obj2.a { name: 'koushith' } - now we are actuall deleting referenced value

console.log(obj1); // { name: 'koushith' }

delete obj2;

console.log('obj2', obj2);
delete obj2.name;
console.log('obj2', obj2); // {}

console.log(obj1); // {}
/**
 * referencing- js is garbage collected. we dont have to worry about memory management
 */
