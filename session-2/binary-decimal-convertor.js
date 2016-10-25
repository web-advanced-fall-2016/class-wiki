/*
 *  This is just a node package called "readline-sync". It enables us to read inputs from terminal!
 */
let rl = require('readline-sync');



/*
 *  This function gets a binary number as input and returns the decimal value!
 */
function convertBinary(binaryNumber) {
    let decimalValue = 0;
    // split the input string into individual digits and immediately map them to Integers.
    // I am using arrow function as the argument of .map() function.
    let digitArray = binaryNumber.split('').map((value) => parseInt(value));

    for (let i = digitArray.length - 1; i >= 0; i--) {
        if (!(digitArray[i] === 0 || digitArray[i] === 1)) { // checking if all digits are either 0 OR 1
            console.log("Wrong number!");
            return;
        }
        let exponent = digitArray.length - i - 1;
        decimalValue += digitArray[i] * Math.pow(2, exponent); // decimalValue+= value; is shorhand for => decimalValue = decimalValue + value;
    }
    return decimalValue;
}

/*
 * Make and endless loop for our binary->decimal convertor.
 */
while (true) {

    let binaryNumber = rl.question("Enter the binary number: "); // read the value from terminal or user's input
    let result = convertBinary(binaryNumber); // convert it using "convertBinary" function!
    
    
    // if "result" has a value.
    // In other words, it's not falsy: (https://developer.mozilla.org/en-US/docs/Glossary/Falsy) OR 
    // it's truthy(https://developer.mozilla.org/en-US/docs/Glossary/Truthy).
    // Then print it in console.
    if (result) {
        console.log(result);
    }
}