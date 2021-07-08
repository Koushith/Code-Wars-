const bruce = { name: 'Bruce' };
const madeline = { name: 'Madeline' };

function greet() {
  return `hello, iam ${this.name}!`;
}

// console.log(greet());

// console.log(greet.call(bruce)); // this is bound to bruce
// console.log(greet.call(madeline)); //this is bound to madeline

function update(birthyear, occupation) {
  this.year = birthyear;
  this.occupation = occupation;
}

//console.log(update.call(bruce, 1949, 'singer'));
update.call(madeline, 1942, 'actress');
//console.log(bruce);

const name = {
  first: 'koushith',
  last: 'amin',
};

function printFullName(homeTowm, age) {
  return `Hello, 'i'm ${this.first} from ${homeTowm} and i'm ${age}years old'`;
}

console.log(printFullName.call(name, 'madikeri', 23));
console.log(printFullName.apply(name, ['madikeri', 25]));

// let bind = printFullName.bind(name, 'mysore', 15);
// console.log(bind());

console.log(printFullName.bind(name, 'mysore', 15)());
