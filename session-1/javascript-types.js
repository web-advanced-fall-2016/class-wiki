let jsTypes = {
    a: 0, // logs number
    b: 'saman', // logs string
    c: false, // logs boolean
    d: undefined, // logs undefined
    e: null, // typeof null will be printed as object! while it has to be "null" -  ECMASCRIPT BUG: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
    f: Symbol('I am a symbol!') // logs symbol
};

//printing all the Own properties of an object with FORIN : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
for (let key in jsTypes) {
    if (jsTypes.hasOwnProperty(key)) {
        let element = jsTypes[key];
        console.log(typeof element);
    }
}

console.log(typeof jsTypes); // logs object