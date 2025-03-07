
//any type
let a1;

a1=10;
a1="datta";
a1=true;

//console.log(a1.ToUpperCase());
//unknown type
let a2 : unknown;
a2="datta";
a2=10;
a2=true;

//checking type

if(typeof a2 ==="string")
{
    let res= a2.toUpperCase();
}

//function

function print(){
    console.log('print() function called');
}

//let res= print(); // Error

//null
let a3 : null=null;

let a4:string | null;

//undefined

let a5: undefined= undefined;

//never

function printA(): never{
    // while(true)
    //     console.log('printA function returned cursor back');

    throw new Error;
    
}

printA();
console.log('printA() function returned cursor back');