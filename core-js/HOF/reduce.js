/**
 * return {even: -- ,odd:--} // sumof all even and odd
 */

const numbers = [1, 3, 5, 22, 11, 9];

const obj = {
  even: 0,
  odd: 0,
};

const count = (acc, curr) => (curr % 2 === 0 ? { ...acc, even: acc.even + curr } : { ...acc, odd: acc.odd + curr });

const reduced = numbers.reduce(count, obj);

//console.log(reduced);

/**
 * simulate the cart summary - return the total amount
 */

let cartItems = [
  {
    name: 'Nokia',
    price: 6000,
  },
  {
    name: 'samsung s3',
    price: 10000,
  },
  {
    name: 'lava',
    price: 1200,
  },
  {
    name: 'boad',
    price: 700,
  },
];

const reducer = (acc, curr) => acc + curr.price;

const sum = cartItems.reduce(reducer, 0);

console.log('cart sum', sum);
