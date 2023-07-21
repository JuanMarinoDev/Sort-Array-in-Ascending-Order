const sortArray = function(arr) {
  let sortedArray = arr.sort( (a,b) => a-b );
  return sortedArray;
}


// Test ----> Expected output = [0, 1, 2, 4, 8, 12]
console.log(sortArray([4,8,12,1,0,2]));