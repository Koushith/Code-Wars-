// map- returns new array

const cart = [
  { name: 'Widget', price: 9.95 },
  { name: 'Gadget', price: 22.95 },
];

// get only names

//console.log(cart.map((names) => names.name));

// get only price-

//console.log(cart.map((price) => price.price));

// transform namme to uppercase

//console.log(cart.map((name) => name.name.toLocaleUpperCase()));

// Consider this example where we have our items and corresponding prices in two separate arrays, and we want to combine them:
const items = ['Widget', 'Gadget'];
const prices = [9.95, 22.95];

const combine = items.map((x, i) => ({
  name: x,
  prices: prices[i],
}));

console.log('combine', combine);

let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

console.log(sum(range(1, 10)));
