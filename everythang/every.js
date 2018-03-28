function every(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

function everydos(array, predicate) {
    return !array.some(element => !predicate(element));
}