function sayMyName() {
  let a = 'a';
  return function findName() {
    var b = 'b';
    return function printName() {
      var c = 'c';
      console.log(a);
      return 'Koushith';
    };
  };
}

console.log(sayMyName()()());
