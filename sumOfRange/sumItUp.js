// Write a function called range that takes two arguments (start and end) and returns an array containing all the numbers
function range(start, stop) {
    for(var i = start; i <= stop; i++) {
        console.log(i);
    }
}

function sum(arr) {
    let total = 0;
    for(var value of arr) {
        total += value;
    }
    return total;
}