// useful string methods

// starts with - checks wtr the string starts with given char. it is case sensitive

const str1 = 'Saturday night plans';
console.log(str1.startsWith('sta')); //false
console.log(str1.startsWith('Sa')); //true

// ends with -

console.log(str1.endsWith('s')); //true
console.log(str1.endsWith('ns')); //true

// includes - check if the str included or not

const str = 'JavaScript is amazing';

console.log(str.includes('Script')); // true
console.log(str.includes('script')); // false
console.log(str.includes(' ')); // true
console.log(str.includes('array')); // false

// split - split the str into array

const str2 = 'JavaScript is amazing';
const strNew = 'JavaScript-is-amazing';

console.log(str2.split(' ')); // ["javascript", "is", "amaizing"]
console.log(str2.split('S')); // ["java "criptis amaizing"]
