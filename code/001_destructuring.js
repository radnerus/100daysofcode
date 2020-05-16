const person = {
    name: 'John Doe',
    age: 25,
    gender: 'male'
};

// Conventional Method
const conventionalName = person.name;
const conventionalAge = person.age;
const conventionalGender = person.gender;

console.log(`${conventionalName}, ${conventionalAge}, ${conventionalGender}`);
// John Doe, 25, male

// Object Destructuring
const { name, age, gender } = person;
console.log(`${name}, ${age}, ${gender}`);
// John Doe, 25, male