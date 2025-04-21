const accountId=200; //once assigned can't be changed
let accountMail="mail@gmail.com"
var accountName="Mahi";
accountCity="mumbai";  //not goodt way at all.


//even if now we write 
// accountId=90; //we can see here that we are able to change but all the code will be analysed by node js so will it allow us to change? No

accountMail="hc@hc.com";
accountName="Himesh";
accountCity="Hyderabad";

// prefer not to use var because of issue in block and functional scope.

console.table([accountId, accountMail, accountName, accountCity])