// let c;
// let a = function () {
//   console.log('A', this);
//   const b = function () {
//     console.log('B', this);
//     const c = {
//       name: 'kkk',
//       hi: function () {
//         console.log('C', this);
//       },
//     };
//     c.hi();
//   };
//   b();
// };

// a();

const obj = {
  name: 'billy',

  sing() {
    console.log('a', this); //onj
    let anotherFunction = function () {
      console.log('b', this); //obj
    };

    anotherFunction();
  },
};

console.log(obj.sing());
