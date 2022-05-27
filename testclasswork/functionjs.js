function add(a, b) {
    return a + b;
}

var res = add(3, 4);
console.log(res);


// console.log(arko(2,4)); can't do this before the fn=unction declaration
// can be only called only they are assigned
let arko = function (a, b) {
    return a + b;
}

console.log(arko(2, 4)); //this worrks as the function has been declared.



//Example for passing the functtion
// function a(){
//     console.log("HER A");
// }
// function caller(a){
//     console.log(a);
//     a();
// }

// console.log(a());

// let b= function(x){
//     console.log(x);
// }


let a = ["apple", "banana", "catss"];





console.log(giveLenArry(a));
console.log(giveElementGTFive(a));


function giveLenArry(objArr) {
    var lenAr = [];
    for (let i = 0; i < a.length; i++) {
        var ele = a[i].length;
        lenAr.push(ele);
    }
    return lenAr;
}

function giveElementGTFive(objArr) {
    var lenArWithFive = [];

    for (let i = 0; i < a.length; i++) {
        var ele = a[i].length;
        if (ele > 4) {
            lenArWithFive.push(a[i]);
        }
    }
    return lenArWithFive;
}
let wow = function giveElementGTFive(objArr) {
    var lenArWithFive = [];

    for (let i = 0; i < a.length; i++) {
        var ele = a[i].length;
        if (ele > 4) {
            lenArWithFive.push(a[i]);
        }
    }
    return lenArWithFive;
}

let cc = giveElementGTFive(a);
console.log(cc);

console.log(wow(a));


function returnName(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i].length == 5) {
            return a[i];
        }
    }
    return null;
}

function returnNameIndex(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i].length == 5) {
            return i;
        }
    }
    return null;
}

console.log(returnName(a));
console.log(returnNameIndex(a));

function returnNameIndexPair(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i].length == 5) {
            return [a[i], i];
        }
    }
    return null;
}

console.log("Pair of the list => " + returnNameIndexPair(a));