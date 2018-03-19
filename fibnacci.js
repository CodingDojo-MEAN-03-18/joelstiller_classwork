function fib() {
    var first = 1;
    var last = 1;
    function nacci() {
        console.log(first);
        holder = last;
        last = first;
        first = first + holder;
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"