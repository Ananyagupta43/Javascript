// we can write 
const num=400;

// but we have another option as well and that is to explicitly define the type as number 

let num2=new Number(600);

console.log(num2.toString().length);
console.log(num2.toFixed(2));

const numb=323.92323;
console.log(numb.toPrecision(3));  // precises the value but make sure how many digits are 
//there before decimal.

const dec=1000000000;
console.log(dec.toLocaleString());  // will add commas after zeros but according to american standard
console.log(dec.toLocaleString('en-IN'));

//-------------------------------Math(Library in js)---------------------------

console.log(Math)

console.log(((Math.random()*10)+1));

//suppose we want to find random values between certain numbers 

const max=20;
const min=10;

console.log(Math.floor(Math.random() * (max-min+1)+min))
 