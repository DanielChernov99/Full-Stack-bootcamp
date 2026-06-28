// #19
// Given a string, return the first character that appears only once.
// If no such character exists, return null.
//
// Constraints: the string will only contain lowercase letters.
// The string will always have at least one character.
//
// Input:  "leetcode"   →  Output: "l"
// Input:  "aabb"       →  Output: null
// Input:  "aabbc"      →  Output: "c"

function firstNonRepeating(str) {

    const countLetters = new Array(26).fill(0);
    const ASCII_a = 'a'.charCodeAt(0);

    for(const char of str){
        const index = char.charCodeAt(0) - ASCII_a;
        countLetters[index] ++;
    }

    for (const char of str) {  
        const index = char.charCodeAt(0) - ASCII_a;

        if (countLetters[index] === 1) {
            return char;
        }
    }

    return null;
}

// Tests
console.log(firstNonRepeating("leetcode")); // → "l"
console.log(firstNonRepeating("aabb"));     // → null
console.log(firstNonRepeating("aabbc"));    // → "c"