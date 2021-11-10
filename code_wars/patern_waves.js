/*
# Task:

    Complete the pattern, using the special character ■ □
    In this kata, we draw some histogram of the sound performance of ups and downs.

# Rules:

    parameter waves The value of sound waves, an array of number, all number in array >=0.
    return a string, ■ represents the sound waves, and □ represents the blank part, draw the histogram from bottom to top.

*/
let assert = require('assert')

function draw(waves){
    let m = Math.max(...waves)
    let n = waves.length
    let histogram = []
    // let histogramMatrix = Array(waves.length).fill(Array(m))

    for (let level = m ; level > 0; level -= 1){
        let layer = []
        // for (let mark of histogramMatrix){
        for (let mark = 0; mark < n; mark += 1){
            if (waves[mark] >= level) { layer.push("■")}
            else { layer.push("□")}
        }
        histogram.push(layer.join(""))
    }
    console.log(histogram.join("\n"))
    return histogram.join("\n")
}

draw([1,2,3,3,2,1])
draw([1,2,3,3,2,1,1,2,3,4,5,6,7])
draw([5,3,1,2,4,6,5,4,2,3,5,2,1])