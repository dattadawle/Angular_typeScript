"use strict";
//type assertion
let b1 = "10";
let b2 = parseInt(b1); //string to number
console.log(`b1 : ${b1} , b2 :${b2}`);
b2 = Number(b1);
console.log(`b1 : ${b1} , b2 :${b2}`);
//unery operator
b2 = +b1; //string to number 
console.error(`b1 : ${b1} , b2 :${b2}`);
let b3 = "false";
let b4 = Boolean(b3); // works if only string contains true value
console.warn(`b3 : ${b3} , b4 :${b4}`);
b4 = (b3 === "true");
console.log(`b3 : ${b3} , b4 :${b4}`);
let b5 = 10;
//let b6 :string=b5 as unknown as string;
let b6 = b5.toString();
console.log(`b5 : ${b5} , b6 :${b6}`);
let s = "sangmeshwar";
console.log(`number of characters : ${s.length}`);
console.log(`name in upper:${s.toUpperCase()}`);
console.log(`name in Lower:${s.toLocaleLowerCase()}`);
console.log(`replace s with $:${s.replace('s', '$')}`);
let s1 = s.substring(0, 3);
console.log(`s.substring :${s1}`);
let i = s.indexOf('n');
console.log(`Index of n : ${i}`); // 2
