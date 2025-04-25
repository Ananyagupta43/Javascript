//try avoiding the + syntax for concatenating the string instead use backticks in 
// which we create placeholders and directly inject the variables present inside them.

let name="Ananya";
let count=30;

let resultString =`Hello my name is ${name} and repo count is ${count}`
console.log(resultString)

// Another way of declaring a string is using class syntax

const st=new String('Himani');
console.log(st[0]);
console.log(st.__proto__);
console.log(st[0].toLocaleLowerCase());
console.log(st[3].toUpperCase());


// we have slice method in which we can give negative values as well so that it will start from reverse.

console.log(st.slice(-4,4));  // -4 means last 4th character => m and +4 means 4th character from start

// we have trim and replace as well 
// trim is for removing white spaces from first and last.

let stVal= "    suryabvanshi     ";

console.log(stVal.trim());

// replace

const url="https://himansi%20goods.com/himanshigoods"

console.log(url.replace('%20','-'));
//split can be used for breaking a string from a certain point