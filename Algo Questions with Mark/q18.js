// #18
// Given an array of positive integers and a target number, return
// the length of the longest contiguous subarray whose sum is less
// than or equal to the target.
//
// Constraints: the array will only contain positive integers.
// Return 0 if no valid subarray exists.
//
// Input:  [1, 2, 3, 4, 5], target 8   →  Output: 3  ([1,2,3] or [2,3,4] - wait, 2+3+4=9, so [1,2,3]=6 or [3,4]=7, longest is [1,2,3] length 3... actually [3,4,5] = 12 no... [1,2,3]=6 ✓ length 3, [2,3]=5 ✓ length 2... longest is [1,2,3] = 3)
// Input:  [3, 1, 2, 1],    target 4   →  Output: 3  ([1,2,1])
// Input:  [5, 6, 7],       target 4   →  Output: 0  (no element fits)
// Input:  [1, 1, 1, 1],    target 3   →  Output: 3  ([1,1,1])

// positive integers
// contiguous subarray
// less than or equal to the target.


function longestSubarray(arr, target) {
    let left = 0, right = 0, longest = 0
    let currentSum = 0
    while(right < arr.length){
        currentSum += arr[right]
        while(currentSum > target){
            currentSum -= arr[left]
            left++
        } 
        longest = Math.max(longest,right - left + 1)       
        right++
        
    }
    return longest
}

// Tests
console.log(longestSubarray([1, 2, 3, 4, 5], 8)); // → 3
console.log(longestSubarray([3, 1, 2, 1], 4));     // → 3
console.log(longestSubarray([5, 6, 7], 4));        // → 0
console.log(longestSubarray([1, 1, 1, 1], 3));     // → 3
console.log(longestSubarray([2, 2, 1, 2, 1], 4));     // → 3
console.log(longestSubarray([2, 2, 1, 2, 5], 4));     // → 2