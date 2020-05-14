const john = {
    name: 'John Doe',
    age: 25,
    gender: 'male'
};

const jane = {
    name: 'Jane Doe',
    age: 26,
    gender: 'female'
}

// Destructuring with alias
const {name: fullNameOfJohn, age: ageOfJohn} = john;
const {name: fullNameOfJane, age: ageOfJane} = jane;

console.log(`${fullNameOfJohn} is ${ageOfJohn} years old.`);
// John Doe is 25 years old.
console.log(`${fullNameOfJane} is ${ageOfJane} years old.`);
// Jane Doe is 26 years old.
