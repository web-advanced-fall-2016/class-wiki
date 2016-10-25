/*
 * Regular Expressions are statements(expressions) which define arbitrary string patterns.
 * Using a set of special characters, we are able to create complex patterns and look for those
 * pattern matches for a given input.
 * Here is the list of all these special characters : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters
 * 
 * Let's say, given a long sentence ( string ) input, we want to find all the words that have
 * five or more letters. 
 * This is how our Reg. Exp. will look like : /[a-zA-Z]{5,}/
 * [a-z] will match any lowercase characters,[A-Z] matches any uppercase characters
 * [a-zA-Z] matches both lowercase and uppercase. 
 * 
 * {n,m} Where n and m are positive integers and n <= m, Matches at least n and at most m occurrences 
 * of the preceding expression. When m is omitted, it's treated as ∞.
 * 
 * So {5,0} matches anything with at least 5 occurrences of [a-zA-Z], 
 * which is what we are after : all the words that have 5 or more letters.
 * 
 * Look at the examples below:
 */
console.log("=============First Example=================");

let string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, dolor at scelerisque fermentum, nisi nisl rutrum mi, ac viverra arcu sem ut neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce blandit dapibus aliquet. Aliquam quis malesuada enim, vel tristique elit. Proin fermentum dui eget sollicitudin hendrerit. Quisque sodales ipsum vel aliquam consectetur. Proin dictum quis tellus eu aliquam. Etiam finibus, neque nec sollicitudin sollicitudin, diam leo lacinia massa, eget aliquet ipsum felis vel nulla.

In in elit consectetur, dictum ipsum vitae, luctus leo. Sed mollis tristique tellus vel iaculis. Sed scelerisque, mauris sed iaculis sagittis, lectus metus tristique velit, blandit auctor sapien lorem id diam. Maecenas vulputate et justo vitae pretium. Morbi sagittis nulla ac augue aliquam, sit amet semper metus viverra. Integer volutpat turpis nec massa faucibus mollis. Ut pellentesque venenatis eros a accumsan.

Vestibulum gravida scelerisque tristique. Morbi vitae neque a quam rutrum fermentum sed et ligula. Integer in vestibulum libero. Cras a erat eget enim bibendum dictum sed tempus lorem. Nullam at risus sed justo pretium sagittis. Donec vehicula mi id urna ornare mollis. Donec aliquam turpis commodo risus ornare ornare. Nullam ullamcorper laoreet arcu, quis mattis odio. Quisque lacinia pretium blandit. Ut lobortis nulla vitae nulla tristique vehicula. In euismod, eros sit amet malesuada bibendum, mi magna consequat justo, in imperdiet magna lectus vel mi. Vivamus vitae blandit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.`;

let regEx = new RegExp("[a-zA-Z]{5,}"); // similar to => let regEx = /[a-zA-Z]{5,}/;

let wordsArray = string.split(' '); // spliting the large sentence into words. 

let wordsWithMoreThanFiveLetters = wordsArray.filter(function(value) {

    return regEx.test(value); // .test function return true if there was a match and false if no match.

    /* This is a longer version, maybe more readable  for the single line above
        let result = regEx.test(value); 
        if (result) { // if there was a match
            return true;
        }
        return false; // if no match ( OR if the word was shorter than 5 letters)
    */
});

console.log(wordsWithMoreThanFiveLetters); // logs all the words that have more than five letters
console.log(wordsArray.length); // number of all the words in the string.
console.log(wordsWithMoreThanFiveLetters.length); // number of the words with more than 5 letters


console.log("=============Second Example=================");

/*
 * Let's say, give a list of urls, we want to extract only the hosts and get rid of everything else
 * For instance, if the url is : http://blog.newschool.edu/asdas/Fall/asd.pdf 
 * We want to extract blo.newschool.edu
 * 
 * See below: 
 */
let urls = [ // I just put all the urls open in my browser in this array.
    "https://mail.google.com/mail/u/0/#inbox",
    "http://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
    "http://www.html5rocks.com/en/tutorials/async/deferred/",
    "https://wildlyinaccurate.com/understanding-javascript-inheritance-and-the-prototype-chain/",
    "https://github.com/orgs/web-advanced-fall-2016/teams/students",
    "https://codelabs.developers.google.com/codelabs/your-first-pwapp/#3",
    "https://www.media.mit.edu/admissions/open-house-info",
    "https://angular.io/docs/ts/latest/tutorial/toh-pt6.html"
];
/*  so let's see what "/{2}([a-zA-Z0-9.]+)/?.*" means :
 *  /{2} exactly two ocurrences of '/'
 * followed by :
 * ([a-zA-Z0-9.]+) => '[a-zA-Z0-9.]' means any lowercase letter OR uppercase letter OR number OR .
 *                     + means 1 occurrencesor more of [a-zA-Z0-9.]
 *                     parenthesis have no meaning other than, they will create a wrap and will return them when matched.
 * 
 * followed by :
 *  /?   => means zero or on slash
 * 
 * followed by :
 * .*  =>  means zero or more '.' ( '.' means any character)
 *  
 */
regEx = new RegExp("/{2}([a-zA-Z0-9.]+)/.*");

let hosts = urls.map(function(value) {
    let result = regEx.exec(value); // exec will return null if no match
    // if there is a match, it will return an array. The first element of the array is the given string.
    // the following elements will be the substrings that were the occurrences of parenthesis in the Regular Expression
    // As we only have one pair of parenthesis in our RegExp, result[1] will be our host. OR in other words,
    // it will be the substring that has matched this => ([a-zA-Z0-9.]+)


    if (result === null) // if no match
        return "no match";

    return result[1]; //else return the host.
});

console.log(hosts);