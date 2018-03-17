// Basic 1
// • Create a variable x as an empty array []. Log this array to your console.

// • Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.

// • Use .pop() to remove the final element of your array.

// • Log the final value of x, what is it?

let x = [];
x.push('coding');
x.push('dojo');
x.push('rocks');
x.pop();
console.log(x);

// Basic 2
// • Create a const called y, and store an empty array there. Log this to your console.
// • Use .push() to add the number 88 to array y.
// • What happened?
const y = [];
console.log(y);
y.push('88');
console.log(y);
// Basic 3
// • Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].
// • Print every element to the console.
// • Now print every element except the final number.
var z = [9, 10, 6, 5, -1, 20, 13, 2];
for (let x = 0; x < z.length - 1;x++) {
    console.log(z[x]);
}
// Basic 4
// • Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
// • Print the length of all names to the console.
// • Now modify your code so only names with a length of 5 print.
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (let x = 0; x < names.length;x++) {
    if ( names[x].length === 5 ) {
        console.log(names[x]);
    }
}
// Basic 5
// • Create a function yell that takes one parameter called string.
// • Make yell return that string in all uppercase.
// • Where could you look to find out more about uppercasing strings in JavaScript?

function yell(string) {
    return string.toUpperCase();
}
console.log(yell('somename'));