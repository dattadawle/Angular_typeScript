interface I{
    printI():void;

}


//interface IA extends I{
    interface IA {
    name :string | undefined;
    getName():string;
}
class B{
    printB() : void
    {
      console.log('B class printB() method');
    }
}
class A extends B  implements IA ,I{
    printI(): void {
       console.log('I printI() implemented');
    }
    name: string | undefined;
    getName(): string {
       return this.name as string;
    }

}



let ia : A=new A();

console.log(`name : ${ia.getName()}`);
 ia.printI();
 ia.printB();

class C{
    constructor (public name : string){

    }
}

class D extends C{
    constructor (name :string ,public city:string){
        super(name);//mandetory to class case class ctor before initializing current class members
    }
}

let d:D=new D('vivek','pune');
console.log(d);



//*************************************************************************************
class E{
    name:string="";
    city:string="";

    // getName():string{
    //     return this.name;
    // }

    // setName(name:string){
    //       this.name=name;
    // }

    get Name():string{
        return this.name;
    }

    set Name(name:string){
          this.name=name;
    }
}

let e:E=new E();
e.Name="datta";
console.log(`name: ${e.Name}`);

//***************************************************************************** */

// method overloading

class F{
    // print(num : number):void{
    //     console.log(`print(num : number) : ${num}`);
    // }

    // print(s : string):void{
    //     console.log(` print(s : string) : ${s}`);
    // }

  print(num:number):void;
  print(s : string):void;
  print(num : number , s :string):void;
  



    print(num? : number | string,s? : string ):void{
        if (typeof num==="number" && typeof s ===  "undefined"){
            console.log(`print(num : number) : ${num}`);
        }

        else if( typeof s ==="string" && typeof num=== "undefined" ){
             console.log(`print(s : string):void : ${num}`);
        }

        else if (typeof num==="number" && typeof s === "string"){
            console.log(`print(num : number , s :string) : ${s} & ${num}`);
        }
    }

}

let f : F = new F();

f.print(10);
f.print("datta");
f.print(10,"datta");