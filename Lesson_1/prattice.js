function findUniq(arr) {
return arr.find(e => arr.lastIndexOf(e) === arr.indexOf(e))
}

console.log(findUniq([7, 7, 7, 1]));
