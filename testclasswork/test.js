var tfirstVal = "hello babe";

var secVar = "Second hi";
var num = 2;
var float = 2.2;
console.log(tfirstVal);
console.log(secVar);
console.log(num);
console.log(float);

// assign variable null
var someVal = null;
var undefined;
console.log(someVal, undefined);

// // get eror if something is not defined. 
// console.log(te);


// Block scoped variable
function test() {
    let x = 10;
    if (x > 10) {
        var y = 4;
    }
    console.log(y);
}


test();



//constatnt
const aa = 5; //cant reassing it 
console.log(typeof aa);


// declaring obbjects
var obbjects = { a: 1, y: "apple", nested: { a: 2 }, arrayArko: [1, 2], booleantype: true };

{/* <name>.<property> */ }
console.log(obbjects.a)

console.log(obbjects.nested.a);

var obN = obbjects.nested;
console.log(obN.a);


// Copy by value
var q = "message";
var another = q;
console.log(another);

q="message2";
console.log(q);
console.log(another);



// reference
var myObj  = {a:1};
var myObj2 = myObj;
console.log(myObj2.a);

myObj2.a=4;
console.log(myObj2.a);

//Operatrs.
// === and !==

let ap = 10;
let ap2 = ap/2;
let ap3 = "5s";
let ap4 = 5;
console.log(ap==5);
console.log(ap==5);
console.log(ap2===ap4);



//Char at position

// index of , las Index of, 
//substring

let tetStr = "HelloMam";

// tetStr = 0;
console.log(tetStr.substring(0,2));
console.log(tetStr + "Hi");


for(let i=0; i<10; i++){
    console.log(i+2);
}

//go through arrays
//do pop and push
//shift and unshift

//splice for delete insertt items

let myObjSplice = ["apple", "juice", null];

let deleted = myObjSplice.splice(0,3,"Hello new");
console.log(myObjSplice, deleted);
console.log(deleted);

// arrybbj.splice("startindex yeta","numberr of deletion yeta ", -> additoin new item yeta"apple")

//chek 



