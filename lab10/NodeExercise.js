var exp = require('../lab10/NodeRepo')

let workArray = [1, 4, 2, 1, 5, 6, 77, 8, 21, 2, 4, 2, 3, 8];
let mixedArray = [1, "hiram", 1, 5, "solid", 8, 21, 2.2, 4, 2, "a", true];

// ARRAY EXERCISE
console.log("EVEN array ", exp.EvenExp(workArray));
console.log("ODD array ", exp.OddExp(workArray));
console.log("DIV by 4 array ", exp.Div4Exp(workArray));
console.log("SUM of array ", exp.SumExp(workArray));
console.log("Unique array ", exp.Unique(workArray));
console.log(exp.Unique([1, 1, 2, 3, 4, 5, 5]));
console.log(exp.destructiveArray([1, 2, "a"]));
console.log(exp.findFirstOddIndex([2, 4, { a: 2, g: 4 }, 5]));
console.log(exp.convertArrayToString([2, 4, 4, 5]));

//Object Arrays
console.log(exp.findYounger([{ name: "Ram", age: 20 }, { name: "Lakshman", age: 15 }, { name: "HariKrisha", age: 35 }, { name: "Lal giri", age: 16 }]));
console.log(exp.findYoungestPerson([{ name: "Ram", age: 20 }, { name: "Lakshman", age: 15 }, { name: "HariKrisha", age: 35 }]));
console.log(exp.findOldestPerson([{ name: "Ram", age: 20 }, { name: "Lakshman", age: 15 }, { name: "HariKrisha", age: 35 }]));
console.log(exp.minifyObject("a", [{ a: 1, b: 2 }, { a: 2, b: 4 }, { x: 1, b: 2, a: { a: 4, b: 7 } }]));
console.log(exp.convertObjectToArray({ a: 1, b: [1, 2], c: "string", d: { x: 1, y: { a: 1, b: { apple: 2, ball: "cat" } } } }));