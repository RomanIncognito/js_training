/*
Given u0 = 1, u1 = 2 and the relation 6unun+1-5unun+2+un+1un+2 = 0 calculate un for any integer n >= 0.
Examples:

Call fcn the function such as fcn(n) = un.

fcn(17) -> 131072; fcn(21) -> 2097152
Remark:

You can take two points of view to do this kata:

    the first one purely algorithmic from the definition of un

    the second one - not at all mandatory, but as a complement - is to get a bit your head around and find which sequence is hidden behind un.


*/
let assert = require('assert')

function fcn (n) {
    if (n < 0) {return -1}
    let theArray = Array(n)
    theArray[0] = 1
    theArray[1] = 2
    for (let i = 2; i <= n; i += 1){
        theArray[i] = (6 * theArray[i-2] * theArray[i-1]) / (5 * theArray[i-2] - theArray[i-1])
        // console.log(theArray)
    }
    return theArray[n]
}

assert.equal(fcn(17), 131072)
assert.equal(fcn(21), 2097152);
assert.equal(fcn(14), 16384);
assert.equal(fcn(43), 8796093022208);
assert.equal(fcn(19), 524288);