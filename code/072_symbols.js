const sym = Symbol('suren')

console.log(sym)

let obj = {}

obj[Symbol('a')] = 'a'
obj[Symbol.for('b')] = 'b'
obj['c'] = 'c'
obj.d = 'd'

for (let i in obj) {
   console.log(i)  // logs "c" and "d"
}

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));