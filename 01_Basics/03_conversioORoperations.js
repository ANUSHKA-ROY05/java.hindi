let score= false

console.log(typeof score);
console.log(typeof(score)) ; //we can also write typeof in the form of module

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

/*
NOTES: convert it into Number
"33"=33
"33Abs"=NaN
true => 1 ; false => 0
*/

let isLoggedIn =1
let booeanisLoggedin = Boolean(isLoggedIn)
console.log(booeanisLoggedin);

/* 
NOTES: convert it into Boolean
1 => true
0 => false
"any text" =>True
""=> False 
*/

let someNum = undefined
let stringSomeNumber = String(someNum)
console.log(typeof(someNum))
console.log(typeof stringSomeNumber)
console.log(stringSomeNumber)