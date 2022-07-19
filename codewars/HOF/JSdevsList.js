/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:-

*/

var list = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
];

function countDevelopers(list) {
  const arr = [];
  list.map((member) => {
    if (member.language === 'JavaScript' && member.continent === 'Europe') {
      arr.push(member);
    }
  });
  return arr.length;
}

// console.log(countDevelopers(list));

// filter- filter out the js dev based on continent  dev and return their length

function devCount(list) {
  // filter out the devs from 'europe'
  return (fromEurope = list.filter((conti) => conti.continent === 'Europe').length);
}

console.log(devCount(list));

// filter only js devs
console.log(list.filter((devs) => devs.language === 'JavaScript'));
function onlyJs(list) {}
