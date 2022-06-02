//Sample Comments

// function main() {//var x;
//     console.log("x1 is:" + x);//undefined? x is declared but not yet assigned, 
//     //there is local varaible with same name.
//     x = 20;
//     console.log("x2 is:" + x);//20? assign local variable
//     if (x > 0) {
//         var x = 30;//
//         console.log("x3 is:" + x);//30?local variable is reassigned.
//     }
//     console.log("x4 is:" + x);//30 (209) var is function scope, so you can read it out of block
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);//50 x is parameter, x is called with 50(217)
//     };
//     f(50);
//     console.log("x6 is:" + x);//40 (213)local variable is assigned 40, 
// }
// main();
// console.log("x7 is:" + x);//10 (213, 209) local declaration of x inside the function.



// 1. 
let grapes = "green"; 
function fruits(){ 
    return function(message){ 
        return grapes; 
    } 
} 
console.log(fruits()());   
//prints green, 
// fruits is being called and the grapes is being returned
//grapes is global variable in this context.


// 2. 
let x = 10; 
function globalVar(){ 
    return function(){ 
       return x; 
    } 
} 
x = 20; 
let fn = globalVar(); 
console.log(fn ()); 

//20 is printed in log. 
//x is a local varaible, and before the glovalVar executed, new number is assigned to x already. 
//so,the number being reassigned change the value of x

 
// 3. 
function sport(message){ 
    message = "Hi"; 
    return function(message){ 
        return message; 
    } 
} 

let sportFn = sport("Hello"); 
console.log(sportFn ()); 
//underfined is printed, 
//the both sport and return function inside sport is parameterized functions. making return message inside finction
//is within the functional scope, thus, inside function, nothing is set to it so, undefined is returned as message.
//wehre as if the return function is not parameterize, it would have printed hi.


 // 4. 
function test(x){ 
    x = 10; 
    x++; 
    return function(){ 
        return x++; 
    } 
} 
console.log(test(2)()) 
//prints 11, 
//test is a parameterized function,
// so x is local varaible inside test, where x is assigned to 10, and a postfix operator is implemented which increases x by 1 before going to return line.
//when returning x++, it is still 11 and before the x as local variable begin post incremented, it returns x as 11 before being changed to 12.



// 5.
function car(){ 
    let color = "white"; 
    function seat(){ 
        let color = "brown"; 
        console.log(color)//___________ 
    } 
    console.log(color)//___________
} 
car("black") 
//second prints white       // color white being scope wihtin car itself.
                            //a local varaible color is declared and assgined white to it.

// 6. 
function department(){ 
    let numberOfDepartments = 5; //local varaible declared and assigned
    console.log(numberOfDepartments);
    function software(){ 
        let language = "javascript"; 
        console.log(language)
    } 
    console.log(language) 
} 
department() ;
//prints 5 first            //numberOfDepartments is local varaible for depratment and is set to 5
//then prints undefined.    //language is undefined in department, but is defined inside software, but it is has scope inside software only. 


 

// 7. 
function department(language){ 
    let numberOfDepartments = 5;  //declared and assinged a value
    console.log(numberOfDepartments)
    function software(){ 
        let language = "javascript"; 
        console.log(language);
    } 
    console.log(language) 
} 
department("java"); 
//prints 5 first        //numberOfDepartments declared and assigned a value which is being priced (local variable)
//prints java           //java is parametized in dapartment which has function scope which in department thus, java is printed and there is no other assignments
                        //while there is language in software as well which has it's own scope inside software scope