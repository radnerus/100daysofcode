// Ways in which NaN is returned

// 0. Assigning NaN to a variable.
const notANumber = NaN;
console.log(notANumber);

// 1. Converting a string to number
console.log(parseInt('Hello World'));
console.log(Number('Hello World'));

// 2. Math operation which result non real numbers
console.log(Math.sqrt(-1));
console.log(Math.sqrt(100 - 101));

// 3. When one of the operands translate to NaN
console.log(7 + NaN);

// 4. Indeterminate math operation
console.log(0 / 0);

// 5. Math operations (other than addition) when string is involved
console.log("hello world" / 3);
console.log("hello world" * 3);
console.log("hello world" - 3);

console.log('hello', +(() => { }));

// Made by Suren🔥