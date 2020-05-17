// Spread Love and Clean Code

// Array concatenation
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const joinedArray = [...arr1, ...arr2];
console.log(joinedArray); // [ 1, 2, 3, 4, 5, 6 ]

// Object concatenation
const obj1 = { prop1: 'value1' };
const obj2 = { prop2: 'value2' };

console.log({ ...obj1, ...obj2 }); // { prop1: 'value1', prop2: 'value2' }

// Array Copy using Spread
const person = { name: 'John' };
const copiedPerson = person;
const copiedPersonUsingSpread = { ...person };
person.name = 'Doe';

console.log(copiedPerson); // { name: 'Doe' }
console.log(copiedPersonUsingSpread); // { name: 'John' }

// Works with Array too
const copiedArray = [...joinedArray];

// Works as param in function
const numbers = [1, 5, 7, 2, 3, 4, 5, 7, 90];
console.log(Math.max(...numbers)); // 90
