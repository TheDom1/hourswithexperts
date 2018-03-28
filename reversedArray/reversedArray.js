// Write 2 func(reversedArray & reversedArrayInPlace)
function reversedArray(array) {
   var output = [];
   for(var i = array.length - 1; i >= 0; i--) {
       output.push(array[i])
   }
   return output;
}

function reverseArrayInPlace(arr) {
    for(var i = 0; i < Math.floor(arr.length / 2); i++) {
        var oldArr = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = oldArr;
    }
    return arr;
}
console.log(reverseArrayInPlace(['A','B','C']));