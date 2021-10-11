var num1 = 12
var num2 = 20
var num3 = 15.5

console.log(typeof(num3))

// Addition
var sum = num1 + num2 + num3
console.log(sum)

//Subtraction
var sub = num3 - num1
console.log(sub)

//Multiplication
var mul = num1 * num2
console.log(mul)

//Division
var div = num2 / num1
console.log(div)

// div by zero

var divByZero = num2/0
console.log(divByZero)
console.log(typeof(divByZero))

console.log(typeof(divByString))

//mul by string

var mulByString = num1 * 'a'
console.log((mulByString))
console.log(typeof(mulByString))