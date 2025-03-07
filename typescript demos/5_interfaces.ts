//object in js

// let c3={id :10, name: 'datta'};
// console.log(`id:${c3.id},name: ${c3.name}`);

// let c4={id :'datta', name: 10};
// console.log(`id:${c3.id},name: ${c3.name}`);

// object with ts
let c3 : {id:number,name:string}={id :10, name: 'datta'};
console.log(`id:${c3.id},name: ${c3.name}`);

// let c4:{id:number,name : string}={id :'datta', name: 10};   // Error
// console.log(`id:${c3.id},name: ${c3.name}`);


interface User{
    id:number;
    name: string;
    gender:string
}

let c5:User={id:10,name:"datta",gender:"male"}
console.log(`id:${c5.id},name: ${c5.name},gender: ${c5.gender}`);

interface User {
    role?:number; // ? => optional
}

let c4 : User = { id : 4, name : "ankita", gender: 'female'};
console.log(`id : ${c4.id} name : ${c4.name} gender : ${c4.gender} role : ${c4.role}`);