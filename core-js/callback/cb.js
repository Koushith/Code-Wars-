// // callback function
// function showName(name) {
//   console.log(`My name is ${name}`);
// }

// // High order function
// function userName(firstName, cb) {
//   return cb(firstName);
// }

// userName('Vansh', showName); // My name is Vansh

function addEventListener() {
  let count = 0;
  document.getElementById('btn').addEventListener('click', function xyz() {
    console.log('btn clicked', count++);
  });
}

addEventListener();
