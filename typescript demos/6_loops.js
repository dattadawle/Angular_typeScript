"use strict";
let arr = [1, 2, 3, 4, 5];
//while loop
let i1 = 0;
while (i1 < arr.length) {
    console.log(arr[i1]);
    i1++;
}
;
//do while loop
console.log('do while output');
i1 = 0;
do {
    console.log(arr[i1]);
    i1++;
} while (i1 < arr.length);
// for loop
console.log('for loop output');
for (let i2 = 0; i2 < arr.length; i2++) {
    if (i2 == 2) {
        // continue;
        break;
    }
}
// for in loop
console.log('for in loop');
for (let num in arr) // will return indexes in arrays
 {
    console.log(num);
}
// for of loop
console.log('for of loop');
for (let num of arr) {
    console.log(num); // will return values in array
}
