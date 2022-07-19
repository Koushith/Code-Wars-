// split- split a string into an array of substrings

var str = 'How are you doing today?, waasp';
console.log(str.split()); //["How are you doing today?"]

// split word by word- including white space
console.log(str.split('')); //["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", " ", "t", "o", "d", "a", "y", "?"]

// split by gap- eg "how are you" --> ["how","are","you"]

console.log(str.split(' ')); //(5) ["How", "are", "you", "doing", "today?"]

// split first 3 word - how -> ["h","o","w"]

console.log(str.split('', 3));
