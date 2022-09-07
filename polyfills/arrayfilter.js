var myArray = [
 1,3,5,6,7,8
  ]

Array.prototype.filterAlbums = function(callback, context) {
   const arr = []
    for (var i = 0; i < this.length; i++) {
      const result = callback(context, this[i], i, this)
      if (result) {
        arr.push(this[i])
      }
    }
    return arr
  }
  var result = myArray.filterAlbums((item, index, arr)=> item > 6)
  console.log(result);