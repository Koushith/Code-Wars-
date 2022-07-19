// HOF- examples

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(console.log);
  }
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];

repeat(5, (i) => {
  labels.push(`unit ${i + 1}`);
});
//console.log('labels', labels);

function grteaterThan(n) {
  return (m) => m > n;
}

let grteaterThan10 = grteaterThan(10);

console.log('greaterthan10', grteaterThan10(11)); // true
