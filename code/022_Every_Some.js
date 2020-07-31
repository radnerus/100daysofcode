const arr = [1, 2, 3, 4, 5];

const isEveryThingMultipleOfTwo = arr.every(ele => ele % 2 === 0);

console.log(isEveryThingMultipleOfTwo); // false

const isSomeMultipleOfTwo = arr.some(ele => ele % 2 === 0);

console.log(isSomeMultipleOfTwo); // true