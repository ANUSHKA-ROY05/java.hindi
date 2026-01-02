let score= false

// console.log(typeof score);
// console.log(typeof(score)) ; //we can also write typeof in the form of module

// let valueInNumber = Number(score)
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

/*
NOTES: convert it into Number
"33"=33
"33Abs"=NaN
if score = null ; then => 0
if score= undefined ; then => NaN
true => 1 ; false => 0
*/

let isLoggedIn =1
let booeanisLoggedin = Boolean(isLoggedIn)
// console.log(booeanisLoggedin);

/* 
NOTES: convert it into Boolean
1 => true
0 => false
"any text" =>True
""=> False 
*/

let someNum = true
let stringSomeNumber = String(someNum)
console.log(typeof(someNum))
console.log(typeof stringSomeNumber)
console.log(stringSomeNumber)

/* 
NOTES: convert it into string
null => null as string
undefined => undefined as string
33 =>"33"
true boolean => true as string
*/

// **************************** Operations **************************

let v1 = 3
let negV1 = -v1
// console.log(negV1);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%2);
// console.log(2/3);

let str1 = "hello"
let str2 = " anushka"
let str3 = str1+str2
// console.log(str3)

// console.log("2"+3 )
// console.log(2+"3")
// console.log("2"+3+3)    //if string is first then operation is performed asumming all of them as string
console.log(2+3+"3")    //if number is first then operation is performed assuming elements without "" as numbers and then added as string with "any string text"
//however  last 2 laines are not preffered in professional space for writting code for companies

//console.log(+true) //conversion of bollean to number due to the '+'
//console.log(+"")    //conversion into number due to '+' however this writting style is not preffered in professional space
//console.log(+"TEXT")
//FOR PROPER STUDY GO THROUGH OPERATOR PRECEDENCE
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
//console.log(typeof x2)
const y2 = x2++;
// x2 is 4n; y2 is 3n
//console.log(y2)