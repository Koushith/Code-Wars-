function linerarSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linerarSearch([20, 80, 70, 10, 5, 8, 12], 12));
