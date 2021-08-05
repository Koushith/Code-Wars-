function stringSearch(long, short) {
  var count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(long[i], short[j]);
      if (short[j] !== long[i + j]) {
        console.log('BREAK!!!');
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch('wowomgzomg', 'omg'));
