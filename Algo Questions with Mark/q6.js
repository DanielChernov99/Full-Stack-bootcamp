// #6
// Given a string of words separated by spaces, return the longest word.
// If there is a tie, return the first one.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in sort functions.
//
// Input:  "the quick brown fox"   →  Output: "quick"
// Input:  "cat elephant dog"      →  Output: "elephant"
// Input:  "one two six ten"       →  Output: "one"  (tie → first wins)

// function longestWord(str) {
//   // your code here
//   const arrWords = str.split(" ")
//   let longestWord = arrWords[0]
//   arrWords.forEach(word => {
//     if (word.length > longestWord.length){
//         longestWord = word
//     }
//   });
//   return longestWord
// }

// console.log(longestWord("one two six ten"));

function longestWord(str) {
  return str.split(" ").reduce((longest,word) =>{
    return longest = word.length > longest.length ? word : longest 
  })
}

console.log(longestWord("the quick brown fox"));


