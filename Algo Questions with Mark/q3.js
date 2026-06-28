//#3
// Given a string, return the number of vowels (a, e, i, o, u) it contains.
// Treat uppercase and lowercase the same.
//
// Constraints: input may contain spaces and mixed case. Vowels are only a e i o u.
//
// Hint: a string of vowels makes the membership check clean —
// check if each character is inside it.
//
// Input:  "hello world" →  Output: 3
// Input:  "Algorithm"   →  Output: 3

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let countedVowels = 0;

  str.split("").forEach(char => {
    if (vowels.includes(char.toLowerCase())) {
      countedVowels++;
    }
  });

  return countedVowels;
}
        


console.log(countVowels("hello world")) 
console.log(countVowels("Algorithm"))   
console.log(countVowels("AEIOU"))       
console.log(countVowels("xyz"))         