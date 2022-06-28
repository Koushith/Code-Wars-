// const obj = {
//   name: 'kou',
//   age: 23,
//   getAge() {
//     console.log(obj);
//     return `${this.name} is ${this.age} old`;
//   },
// };

// console.log(obj.getAge());

function importantPerson() {
  console.log(this.name);
}

let name = 'kou';

const obj1 = {
  name: 'don',
  importantPerson,
};

console.log(importantPerson()); //kou ---- window.imp
