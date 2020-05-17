person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

const arr = [1, 2, 3, 4, 5];
const [ele1, ele2, ...remaining] = arr;
console.log(ele1);
console.log(ele2);
console.log(remaining);

const a = [1];
const [_, __, test = 1] = a;
console.log(test);
