const value = Math.pow(2, 1000);

console.log(value);
// 1.0715086071862673e+301

const bigIntValue = BigInt(value);

console.log(bigIntValue);
// 10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376n

console.log(bigIntValue.toString());
// 10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376

// Note: BigInt numbers will be appended with `n` and `toString()` will return only the numbers as 'String

// Made with ❣️ by radnerus93 