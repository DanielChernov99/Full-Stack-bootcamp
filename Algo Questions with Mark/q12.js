// #13
// Given a string, return the length of the longest substring
// that contains no repeating characters.
//
// Constraints: the string may contain letters, digits, and spaces.
// An empty string should return 0.
//
// Input:  "abcabcbb"  →  Output: 3  ("abc")
// Input:  "bbbbb"     →  Output: 1  ("b")
// Input:  "pwwkew"    →  Output: 3  ("wke")
// Input:  ""          →  Output: 0

// First approach
// function lengthOfLongestSubstring(str) {
//     let left = 0, right = 0 , subStr = ""
//     let maxLength = 0
//     while(right < str.length){
//         if(!subStr.includes(str[right])){
//             subStr += str[right]
//             right++
//             maxLength = subStr.length > maxLength ? subStr.length : maxLength
//         }
//         else{
//             left++
//             subStr = subStr.slice(1)          
//         }
//     }
//     return maxLength
// }

//second approach
function lengthOfLongestSubstring(str) {
    let left = 0
    const seen = new Set()
    let maxLength = 0
    for(let right = 0 ; right < str.length; right ++){
        while(seen.has(str[right])){
            seen.delete(str[left])
            left++
        }
        seen.add(str[right])
        maxLength = Math.max(maxLength,right - left + 1)
    }
    return maxLength
}

// Tests
console.log(lengthOfLongestSubstring("abcabcbb")); // → 3
console.log(lengthOfLongestSubstring("bbbbb"));    // → 1
console.log(lengthOfLongestSubstring("pwwkew"));   // → 3
console.log(lengthOfLongestSubstring(""));         // → 0