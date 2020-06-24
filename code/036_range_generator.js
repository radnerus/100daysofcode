const generateTill = (n) => {
  return new Array(n).fill().map((_, _index) => _index + 1);
};

console.log(generateTill(5)); //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
console.log(generateTill(10)); //[ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
