var logicAlbums = ['Bobby Tarantino', 'The Incredible True Story', 'Supermarket', 'Under Pressure'];

// const mapThoseAlbum = logicAlbums.map((album) => album);

//console.log(mapThoseAlbum);
// So we are clear that we have to return an array in our own polyfill function. So let's create it then.

Array.prototype.myMAp = function (callback) {
  // retun this at the end -

  var arr = [];
  // this refers to window or where it is called.here it refers to the array coz we are calling upon array window has the property called length
  for (var i = 0; i < this.length; i++) {
    // push the current value, index and array-
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

const mapThoseAlbums = logicAlbums.myMAp(function (album) {
  return album;
});

console.log('implimentation from our map', mapThoseAlbums);
