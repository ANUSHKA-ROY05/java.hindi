//BASIC comparisons of same datatype
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2==1);

console.log("2">1);
console.log("02">1);
console.log(null>0);
console.log(null==0);
console.log(null>=0);
/*NOTE: the reason is that an equality check == and comparison ><>= <= work differently
comparison convert null to a number,treating it as 0 .
 */
console.log(undefined>0);
console.log(undefined>=0);

// this will always give false.

console.log("2"===2)    //STRICT CHECK : CHECKS VALUE AS WELL AS DATATYPE