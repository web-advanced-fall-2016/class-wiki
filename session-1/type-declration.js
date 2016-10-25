/*
 *   Uncomment the lines that cause error to see the error yourself.
 */

console.log(a); // Logs undefined : Variables declared with "var" will be hoisted to the top.
//console.log(b); // Error: reference error, variables declared with "let" will not be hoisted! So at the time of execution of this line, "b" hasn't been declared!!

var a = 4;
let b = 3;

const c = 1;
//c = 2; // Error: Assignment to const variable - const variables can't be assigned!
//const d; //Error: Missing initializer in const declaration - const variables have to be initialized!

if (true) {
    let g = 5;
    var e = 6;
}

//console.log(g); // Error: "let" variables are local to their block scope.
console.log(e); // "logs 6, "var" variables do not have block scoping. refers back to declration (line 17).


function func() {
    console.log(a); // logs undefined, refers back to the hoisted variable a ( line 28), that is in the local 'func' function scope.
    //console.log(b); // Error: c is not yet defined!

    var a = 10;
    let b = 15;
    console.log(a); // logs 10, refres back to the local variable (line 28)
    console.log(b); // logs 15, refres back to the local variable (line 29)
}

console.log(a); // Logs 4, it references back to the variable defined in global scope ( line 8) and not the one defined in 'func' function scope (line 28).
console.log(b); // Logs 3, it references back to the variable defined in global scope (line 9) and not the one defined in 'func' function scope with the value 15 ( line 29);

func();