// SLICE- think of cake- slice and take a part

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice()); // nothing happens- it will return the whole array

const modified = animals.slice();

// console.log('Modified', modified);

const modifiedTest = modified.slice(1); //except ant it return everythg

// console.log('modified test', modifiedTest);

// return last 2-
// console.log(animals.slice(-2)); //duck, elephant

// return camel and duck

// console.log(animals.slice(2, 4)); //last index is exclusie=ve- camel, duck

// -------------------------------------------------------

let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];

// Using slice, create newCar from myCar. ignore props

// console.log(myCar);

let newCar = myCar.slice(2);
// console.log('NEW Car', newCar);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.

// console.log('myCar = ' + JSON.stringify(myCar));
// console.log('newCar = ' + JSON.stringify(newCar));
// console.log('myCar[0].color = ' + myCar[0].color);
// console.log('newCar[0].color = ' + newCar[0].color);
