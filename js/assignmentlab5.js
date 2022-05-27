
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function max(a, b) {
    if (a > b) {
        return a;
    } else
        return b;
}


// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

// Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(a) {
    if (a.length == 0 || a.length > 1) {
        return false;
    } else {
        a = a.toLowerCase();
        if (a == "a" || a == ("e") || a == ("i") || a == ("o") || a == "u") {
            return true;
        }

    }
}



// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(a) {
    var sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return a;
}

function multiply(a) {
    var sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum = sum * a[i];
    }
    return a;
}

// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(take) {
    var revStore = "";
    for (let i = take.length - 1; i >= 0; i--) {
        revStore = revStore + take.charAt(i);
    }
    return revStore;
}

// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(params) {
    if (params.length == 0) {
        return "Length 0";
    }
    var maxLen = params[0].length;
    for (let i = take.length - 1; i >= 0; i--) {
        if (maxLen < take[i].length) {
            maxLen = take[i].length;
        }
    }
    return maxLen;
}


// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(params, mLen) {
    var filteredArr = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i].length > mLen) {
            filteredArr.push(params[i]);
        }
    }
return filteredArr;
}

// console.log(filterLongWords(["apple", "ball"],4));

// Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:
// a) multiply each element by 10; 
// b) return array with all elements equal to 3; 
// c) return the product of all elements;

function multiplyElement(objArr, num){
   return objArr.map(function(elem, i, array) {
        return elem*num + 3;
      })
}

function findOnlyElement(objArr, num){

}

function reduceByMultiplying(objArr, num){

}

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem*10 + 3;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem == 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);
