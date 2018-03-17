// Function takes a number as input and returns that many stars....
function starString(x) {
    out = '*'.repeat(x);
    return out;
}
console.log(starString('4'));

// Function takes an array input and spits out stars for each element.
// function drawStars(arr) {
//     for (let x = 0; x < arr.length; x++){
//         console.log('*'.repeat(arr[x]));
//     }
// }
// drawStars([2,10,4,15]);

// Drawstars 3 allows input of strings and numbers.
function drawStars(arr) {
    for (let x = 0; x < arr.length; x++){
        if ( typeof(arr[x]) === 'number') {
            console.log('*'.repeat(arr[x]));
        }
        if ( typeof(arr[x] === 'string')) {
            lower = arr[x].toString().toLowerCase();
            first = lower.charAt(0);
            console.log(first.repeat(lower.length));
        }
        
    }
}
drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);