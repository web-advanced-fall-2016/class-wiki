let empty = new Array(); // Instantiating empty array using 'new' primary expression.

// Instantiating an array using array literal => let a = []; ** recommended to use insead of using 'new' primary expression.
let students = [
    'Saman Tehrani',
    'Sofia Aronov',
    'Jourdan Bousfield',
    'Eliza Bruce',
    'Raquel Cervantes',
    'Chieh-Ping Chen',
    'Raha Ghasemi',
    'Cecilia Giorcelli',
    'Terricka Johnson',
    'Miyeon Kim',
    'Kim Carl Daniel Koehler',
    'Yue Lin',
    'Xianghan Ma',
    'Dana Martens',
    'Jane Mitchell',
    'Leyla Novini',
    'Chao Hui Tu',
    'David Utt',
    'Marielle Verni',
];

students.push('Yi Zhu'); // One way to add items to an array.

students[students.length] = 'Lu Zhou'; // this also adds and element to the end of the array.

students[30] = 'Catherine Schmitz'; // This statement will add 'Catherine Schmitz' in the 31st element of the array (index 30!),
// It will also expand the size of the array to 31, and leaves new cells undefined

console.log(students); //logs the full array. Note that we have several empty elements!
console.log(students.length); // logs 31

console.log(students.slice(20)); // logs section of the array from index 20 to the end. Empty spaces are undefined.
console.log(typeof students[25]); // logs undefined

console.log(students[0]); // logs 'Saman Tehrani'
let teacher = students.shift(); // removes the first element of the array and assigns it to 'teacher'!
console.log(students.length); // logs 30

console.log(students[students.length - 1]); // logs arrays last element :  'Catherine Schmitz'!
let TA = students.pop(); // removes the last element of the array and assigns it to 'TA'!
console.log(students.length); // logs 29

let studentsNoEmpty = students.filter(function(value) {
    if (value === undefined || value === '' || value === null) {
        return false;
    }
    return true;
});
console.log(studentsNoEmpty); // logs all the students, no TA no Teacher, no empty
console.log(studentsNoEmpty.length); // logs 20, this array doesn't include the empty cells.

students = studentsNoEmpty;

students = students.map(function(value, index, arr) {
    return value.toLowerCase();
});

console.log(students); // logs all the students but lower cased!

students = students.map(function(value, index, arr) {
    let valueWithNoSpace = value.split(' ').join('-'); // For each entry, it splits the string on occurences of ' ', then joins them back with '-'
    return valueWithNoSpace;
});

console.log(students); // logs all the students with all the spaces replaced with dashes!
