//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
let arrays = [[1,2,3], [4,5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));