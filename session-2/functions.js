sayHello(); //Although you are calling the function before declaring it, it won't result in an Error, Due to function hoisting!
//This will log: hello
function sayHello( /*arguments it any*/ ) {
    console.log("hello");
}
sayHello(); // This is how you call a function!
//This will log: hello

console.log("========================================="); // just separator for more readablity in your terminals!

//sayBye(); //Uncommenting this statement will result in Error, since function expression won't get hoisted! 
let sayBye = function() { // This is a function expression!
    console.log("bye");
};
sayBye(); // This will log: bye

console.log("=========================================");

/*  IIFE : Immediately Invoked Function Expression
 *  If you wrap your function declration in a set of paranthesis follow by arguments list,
 *  you create an IIFE!
 *  let's say we have the following function declaration :              
 *  function(name){
 *       if( name ) {
 *           console.log(name);
 *       }else{
 *           console.log("I am IIFE");
 *       }
 *  }
 *  Now I put the declaration it inside the first set of paranthesis => (declaration)(arguments);
 *  Now I have an IIFE like below:
 */
(function(name) { // This will log: Eliza
    if (name) {
        console.log(name);
    } else {
        console.log("I am IIFE");
    }
})("Eliza");

// This will log: I am IIFE
(function(name) {
    if (name) {
        console.log(name);
    } else {
        console.log("I am IIFE");
    }
})( /* no arguments this time*/ );

console.log("=========================================");