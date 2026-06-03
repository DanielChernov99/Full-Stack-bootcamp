//#2
// Given a string, return it reversed.
// You may not use any built-in reverse functions.
//
// Constraints: the string will only contain lowercase letters.
// Think about iterating from the end toward the beginning.
//
// Hint: you can build a new string character by character by iterating backwards.
//
// Input:  "hello"     →  Output: "olleh"
// Input:  "algorithm" →  Output: "mhtirogla"

function reverseString1(str) {
  let reversed = ""
  for (let index = str.length -1 ; index >= 0 ; index--) {
    reversed += str[index]  
  }
  return reversed
}

function reverseString2(str) {
  const reversed = str.split("").reduce( (char, rest) => {
    return rest + char
  },"")
  return reversed
}

const test1 = "hello"
const test2 = "algorithm"

// console.log(reverseString1(test1));

// console.log(reverseString1(test2));

console.log("------------------------");


console.log(reverseString2(test1));

console.log(reverseString2(test2));
