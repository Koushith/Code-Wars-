let a = [5, 1, 3, 2, 6];

//  find the sum

function sum(arr) {
  let sum = 5;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum(a));

// use reduce to achieve the same
// take a function-  first arg- acc which is equlvalent to sum. send is the current element in array. 3rd arg is the initial count- i.e let sum=0

let output = a.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(output);

// find the max in array

function findMax(arr) {
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log('Find Max', findMax(a));

// impliment find max using reduce-

console.log(
  a.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, 0)
);

const users = [
  {
    firstName: 'koushith',
    lastName: 'Amin',
    age: 26,
  },
  {
    firstName: 'Akash',
    lastName: 'H P',
    age: 23,
  },
  {
    firstName: 'Swaroop',
    lastName: 'BS',
    age: 18,
  },
  {
    firstName: 'Swaroop',
    lastName: 'BS',
    age: 18,
  },
  {
    firstName: 'Ankitha',
    lastName: 'Salian',
    age: 24,
  },
  {
    firstName: 'preetham',
    lastName: 'br',
    age: 25,
  },
];

// list all full anmes

let fullNames = users.map((name) => `${name.firstName} ${name.lastName}`);

console.log(fullNames);

// return the users who is above <20

let minors = users.filter((minors) => minors.age < 20);

console.log(minors);

// find the sum of all users age

let totAge = users.reduce((acc, curr) => {
  return (acc += curr.age);
}, 0);

console.log('tot', totAge);

// find particular unique age? lets say {20: 2, 18:1}

// initially acc should be empty- we need to keep incrementing
const unique = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log('unique', unique);
