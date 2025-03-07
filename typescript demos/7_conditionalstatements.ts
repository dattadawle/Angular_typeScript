let num : number = 11;
if(num == 10){
    console.log("TEN");
}
else{
    console.log("NOT TEN");
}

// ternary operator
let r1 = (num == 10) ? "TEN" : "NOT TEN";
console.log(r1);

num = 20;

// if else if chain
if(num == 10){
    console.error('TEN');
} else if(num == 20){
    console.error('TWENTY');
} else if(num == 30){
    console.error('THIRTY');
}else{
    console.error('NOT 10 20 or 30');
}

num = 10;

// switch
switch(num){
    case 10:
        console.warn('TEN');
        break;
    case 20:
        console.warn("TWENTY");
        break;
    case 30:
        console.warn("THIRTY");
        break;
    default:
        console.warn("NOT 10 20 or 30");
        break;
}