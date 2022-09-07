const arr = [1, 2, 3, [4, [5, 6] ]];

const flatten = arr => arr.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr), []);


console.log(flatten(arr));