//array = collection of items
   // array in js
var numbers1=[];// empty array

numbers1 =[10,20,30];// array with items

let numbers2 =new Array(); //Empty array
numbers2 = new Array(10,20,30);// array with items

//array in typescript
let numbers3 :Number[]=[1,2,3,4,5,6,7,8,9];
let numbers4 =new Array<number>(10,20,30,40,50);

// array functions

numbers4.push(60);  //adds at last  
numbers4.unshift(5); // adds at first 
for (let i=0; i< numbers4.length;i++){
    console.log(numbers4[i]);
}

let ii= numbers4.pop(); //removes last element
//let ii= numbers4.shift();// removes first element


console.warn(`numbers4.pop:${ii}`);
// for (let i=0; i< numbers4.length;i++){
//     console.log(numbers4[i]);
// }
// 5,10,20,30,40,50

numbers4.splice(2,3); // takes 3 element fron 2 index
for (let i=0; i< numbers4.length;i++){
    console.log(numbers4[i]);
} 
//5,10,50

let nums = numbers4.filter((v,i,arr)=>v%2 !=0);
for (let i=0; i< nums.length;i++){
    console.log(numbers4[i]);
} 

let numbers5:number[]=[1,2,3,4,5,6]
// //o/p =1,4,9,16,25,36
// for (let i=0;i<numbers5.length;i++)
// {
//   console.log(numbers5[i]*numbers5[i]);
// }

// reduce function
// it is used to accumulate array items to one single value

// 1,2,3,4,5,6
let res =numbers5.reduce((pv, cv)=> pv + cv); // 1 + 2 + 3 + 4 + 5 + 6 = 21

console.log(`reduce : ${res}`);

let numbers6 =new Array<number>(10,20,30,40,50);

console.log('filtered elements');
let filterd= numbers6.filter(num => num>10); //20,30,40,50
for(let num of filterd)
{
  console.log(num);
}

console.log('map elements');

let doubled = numbers6.map(num=> num*2); // 20,40,60,80,100
doubled.forEach(element => {
    console.log(element);
});

console.log('elements using find function');
let found = numbers6.find(num => num>20);
console.log(found);

//tuples 
 // fixed length array with diffrent types
let person :[string,number] = ["datta",28]

console.log(person);

//Array of object

type Person ={name: string , age :number}

let people : Person[] = [
    {name :"datta",age :28},
    {name :"shankar",age :30}
]

console.log(people);

//Enum

enum statuscode{
    UnAuthoeized=401,
    BadRequest=400,
    NotFound=404,
    InternalServerError=500
}

let e1 :statuscode = statuscode.InternalServerError;