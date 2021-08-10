// const person = {
//   name: 'koushith',
// };

// function sayMyName(last) {
//   return `My name is ${this.name} ${last} `;
// }

// console.log(sayMyName.call(person, 'Amin'));

// own bind implimentation

function bind(fn, context) {
  return function () {
    fn.apply(context, [...arguments]);
  };
}

const person = {
  name: 'koushith',
};

function sayMyName() {
  console.log(`My name is ${this.name}`);
}

const bound = bind(sayMyName, person);

console.log(bound());
