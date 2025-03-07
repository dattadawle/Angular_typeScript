// typescript code

var a=10;
console.log(a);

let v1=10; //type inference 
console.log(v1);//10

v1 =12.5;
console.log(v1);//12.5

v1=777888999990;
console.log(v1);//777888999990

let v2=true;
console.log(v2);

let v3="datta";
console.log(v3)

let v4:number=10;      //type annotations

let v5 : boolean=true;  //type annotations

let v6:string="datta";

let v7:number | string;           //type union
v7=10;
v7="datta";

type MyType=number | string;      // type alias

let v8 :MyType=10;
v8 ="datta";

