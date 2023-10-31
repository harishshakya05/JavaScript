const myName = "Harish"
let fName = "kumar"
var lName = "Shakya"
console.table([myName,fName,lName])

 //myName = "Harish1"  //can't reassign value to const variable
 fName = "Amit1" // can reassign value to let variable
var lName = "Ram1" // can redeclare and reassign value to var variable

// var not to be used beacuse of scope issue of same variable reassignment

console.table([myName,fName,lName])
