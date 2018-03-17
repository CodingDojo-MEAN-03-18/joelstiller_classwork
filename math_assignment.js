// Math 1
// Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.
function zero_negativity (arr) {
    if (Array.isArray(arr)) {
        if ( Math.min(...arr) < 0 ) {
            return false;
        }
        return true;
    }
    throw("You didn't input an array");
}
console.log(zero_negativity([1,-2,3]));
// Math 2
// Write a function called is_even(). This function should take a number. Return true if the input number is even, return false if the number is odd.
function is_even(x) {
    if ( (x % 2) === 0 ) {
        return true;
    }else{
        return false;
    }
}
console.log(is_even(10));
// Math 3
// Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.
function how_many_even(arr){
    if (Array.isArray(arr)) {
        output = 0;
        for (let x = 0; x < arr.length; x++) {
            if ( is_even(arr[x])) {
                output++;
            }
        }
        return output;
    }
    throw("You didn't input an array");
}
console.log(how_many_even([1,2,3,4,5,6,7,8]))
// Math 4
// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
function create_dummy_array(y) {
    if ( typeof(y) === 'number') {
        out_array = []
        for (let x = 0; x < y; x++ ) {
            out_array.push(Math.floor(Math.random() * 10) );
        }
        return out_array;
    }
    throw("You didn't input a number");
}
console.log(create_dummy_array(30));
// Math 5
// Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.
function random_choice(arr){
    if (Array.isArray(arr)) {
        len = arr.length;
        rand = Math.floor(Math.random() * len);
        return arr[rand];
    }
    throw("You didn't input an array");
}
console.log(random_choice(["one", "two", "Three"]))