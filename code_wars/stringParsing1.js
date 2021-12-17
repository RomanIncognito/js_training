/*

Given a string S, you should calculate an integer R which is the result of summing all S's digits except the first one, and then multiplying the result with the first digit.
if S is not an integer print INVALID

NOTES:
- Be careful, the first number may be negative (starting with '-') !
- Strings starting with '0' are considered valid, example : '012' => 0

Example:
S(Input)=123
R(Output)=1*(2+3)=5
--------------------------- test2
-593

output -60

------------------test3
012

ouput 0

-------------test4
1123456789

output 45

*/

function doFunction(inputString){
  let pattern = /(-?\d)(\d*)$/
  let result = inputString.match(pattern)
  if (result){
    return parseInt(result[1]) * parseInt(result[2].split("").reduce((x,y)=>parseInt(x) + parseInt(y), 0))
  } else {
    return "INVALID"
  }
}

console.log(doFunction("-593"))