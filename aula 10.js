let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; //1.0
num1 += num2; //1.0

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));
console.log(Number.isInteger(1.00));
