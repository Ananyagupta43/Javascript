/* 2 types of data types are there => Primitive and Non Primitive based on how data is 
stored and accessed from memory.

Primitive Data type 
1. String => changes are not done directly to a provided string but in a copy of original string
2. Boolean 3. Number 4.null 5.undefined 6.Symbol 7.BigInt


Reference Type (Non Primitive)
1. Array 2. Object 3.Functions 

JS IS dynamically typed 
Dynamically-typed languages are those (like JavaScript) where the
interpreter assigns variables a type at runtime based on the variable's value at the time.

*/

const val1=Symbol('123');
const val2=Symbol('123');

console.log(val1===val2); //symbol makes things unique