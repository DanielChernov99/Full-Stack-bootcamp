// #11
// Given two arrays, return a new array containing only the elements
// that appear in both arrays. Each element in the result should be unique.
//
// Constraints: the result can be in any order.
// Each element in the result must appear only once even if it
// appears multiple times in both arrays.
//
// Input:  [1, 2, 3, 4], [3, 4, 5, 6]     →  Output: [3, 4]
// Input:  [1, 1, 2, 3], [1, 2, 2]        →  Output: [1, 2]   
// Input:  [1, 2, 3],    [4, 5, 6]        →  Output: []

function intersection(arr1, arr2) {
    let seen = new Set(arr1)
    const result = new Set()

    for(num of arr2){
        if(seen.has(num)){
            result.add(num)
        }
    }
    return Array.from(result)
}

// Tests
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));  // → [3, 4]
console.log(intersection([1, 1, 2, 3], [1, 2, 2]));     // → [1, 2]
console.log(intersection([1, 2, 3], [4, 5, 6]));        // → []