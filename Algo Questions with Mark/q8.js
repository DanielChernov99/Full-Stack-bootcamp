// #8
// Given an array of integers and a target number, return all pairs
// of elements that add up to the target. Each pair should be returned
// as an array of two numbers, and you should return an array of all pairs.
// Avoid duplicate pairs.
//
// Constraints: the array may contain positive and negative integers.
// A number cannot be paired with itself at the same index.
//
// Hint: think about every possible combination of two elements,
// then check if they add up to the target.
//
// Input:  [1, 2, 3, 4, 5], target 6  →  Output: [[1,5], [2,4]]
// Input:  [1, 1, 2, 3],    target 4  →  Output: [[1,3]]
// Input:  [0, -1, 2, -3],  target -1 →  Output: [[0,-1], [2,-3]]

function findPairs(arr, target) {
    let pairs = [];
    let seen = new Set();

    arr.forEach(num => {     //O(n)
        let missing = target - num;
        if (seen.has(missing)) {
            let seenPair = pairs.some(pair =>  //O(n/2) => O(n)?
                (pair[0] === num && pair[1] === missing) ||
                (pair[0] === missing && pair[1] === num)
            );
            if (!seenPair) {
                pairs.push([num, missing]);
            }
        }
        seen.add(num);
    });

    return pairs;
}

// Tests
console.log(findPairs([1, 2, 3, 4, 5], 6)); // → [[1,5], [2,4]]
console.log(findPairs([1, 1, 2, 3], 4));     // → [[1,3]]
console.log(findPairs([0, -1, 2, -3], -1));  // → [[0,-1], [2,-3]]