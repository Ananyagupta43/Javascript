let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());  // date is an object in js

let myTimeStamp=Date.now();
// console.log(myTimeStamp) // this wwll give result in milli seconds 
console.log(Math.floor(Date.now()/1000)) // divided by 1000 because the value we get is in 
//milliseconds 

let newDate=new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth());
