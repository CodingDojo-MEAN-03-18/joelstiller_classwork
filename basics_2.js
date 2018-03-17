function magic_multiply(x, y){
    if ( typeof(x) === 'string' ) {
        x = x.repeat(y);
    }
    if ( typeof(x) === 'object') {
        if ( Array.isArray(x)) {
            outary = [];
            for ( let z = 0; z < x.length; z++ ) {
                outary.push( (x[z] * y) );
            }
            x = outary; 
        }
    }
    if ( typeof(x) === 'number') {
        x = x * y;
    }
    return x;
}

console.log(magic_multiply(5, 2));
console.log(magic_multiply(0, 0));
console.log(magic_multiply([2, 4, 7, 10], 2));
console.log(magic_multiply("words", 4));
