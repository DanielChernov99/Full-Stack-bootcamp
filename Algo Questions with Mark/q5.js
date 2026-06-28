// #5 
//Given an array of integers, return the element that appears
// most frequently. If there is a tie, return the one that appears
// first in the array.
//
// Constraints: the array will always have at least one element.
//
// Hint: think about how you can count occurrences of each element
// as you loop through, then find the highest count.
//
// Input:  [1, 2, 2, 3, 3, 3]  →  Output: 3
// Input:  [5, 1, 5, 2, 1, 5]  →  Output: 5
// Input:  [4, 4, 2, 2, 1,]     →  Output: 4  (tie → first one wins)
// Input:  c

function mostFrequent(arr) {
  // your code here
    const counts = {}


    arr.forEach(num => {
        counts[num] = (counts[num] || 0 ) + 1       
    });

    let maxCount = 0
    arr.forEach(num => {
        if (counts[num] > maxCount) {
            maxCount = counts[num]
        }
    })
    
    for (let num of arr) {
        if (counts[num] === maxCount) {
            return num
        }
    }
    return maxNumber

}

console.log(mostFrequent([1, 2, 2, 3, 3, 3])) 
console.log(mostFrequent([5, 1, 5, 2, 1, 5])) 
console.log(mostFrequent([4, 4, 2, 2, 1]))   
console.log(mostFrequent([1, 2, 2, 2, 1, 1]))   