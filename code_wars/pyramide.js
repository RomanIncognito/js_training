/*
You will get a string s with an even length, and an integer n which represents the height of the pyramid and your task is to draw the following pattern. Each line is seperated with "\n".

    n will always be greater than 3. No need to check for invalid parameters
    There are no whitespaces at the end of the lines

Example

build_pyramid("00-00..00-00", 7) should return:

                                    00-00..00-00
                              0000--0000....0000--0000
                        000000---000000......000000---000000
                   00000000----00000000........00000000----00000000
            0000000000-----0000000000..........0000000000-----0000000000
      000000000000------000000000000............000000000000------000000000000
00000000000000-------00000000000000..............00000000000000-------00000000000000
*/
function buildPyramid(str,n){
  // let chunk_size = str.length / 6
  // let carpet = str.split("").slice(0, chunk_size).join("")
  // let side = str.split("").slice(chunk_size, chunk_size + chunk_size/2).join("")
  // let center = str.split("").slice(chunk_size * 2 + chunk_size/2, chunk_size * 2 + chunk_size/2 + chunk_size).join("")
  // console.log(/((.)\2*)/.exec(str))
  [a, carpet, b, side, c, d, e, center] = /((.)\2*)((.)\4*)((.)\6*)((.)\8*)/.exec(str)
  let pyramid = []
  for (let i = 1; i < n+1; i += 1){
    pyramid.push([" ".repeat((str.length * n - str.length * i ) / 2), 
                  carpet.repeat(i),
                  side.repeat(i),
                  carpet.repeat(i),
                  center.repeat(i),
                  carpet.repeat(i),
                  side.repeat(i),
                  carpet.repeat(i),
                  ].join(""))
  }
  return pyramid.join("\n")
}

// console.log(buildPyramid("000--000...000--000", 7))
console.log(buildPyramid("V-V..V-V", 7))