/*
Corner circle

A circle with radius r is placed in a right angled corner, where r is an integer and ≥ 1.
circles
see ./corner_circle.png
What is the radius of the smaller circle, rounded to two decimal places?
*/
let assert = require('assert')

function cornerCircle(r) {
    let bigTail = ((r ** 2 * 2) ** 0.5 ) - r

    let smallTail = bigTail ** 2 / (bigTail + 2 * r)
    return ((bigTail - smallTail) / 2).toFixed(2)
}

assert.equal(cornerCircle(3), 0.51)
assert.equal(cornerCircle(17), 2.92)

