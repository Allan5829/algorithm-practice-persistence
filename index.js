function additivePersistence(n) {
    let result = 0;

    // Single-Diget Value
    if ( n < 10 && n > 0) {
        return result
    }
    
    // Multiple-Diget Value
    while (n > 9) {
       let string = n.toString().split("")
        n = 0;
        string.forEach( x => { // using reduce yielded an odd error where x became 1,1,2,4,8,16...
            n += parseInt(x, 10)
        })
        result++
        if ( n < 10 && n > 0) {
            console.log(result)
            return result
        } 
    }
}

function multiplicativePersistence(n) {
	
}

additivePersistence(199)

/*
pseudo code
create what 1 line of a loop would look like and turn it into a while loop using the if condition above

example 
additivePersistence(1679583) ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.
*/