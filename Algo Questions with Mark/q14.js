// #14
// Given an array of integers, move all zeros to the end
// while keeping the relative order of non-zero elements.
// Do this in-place, do not create a new array.
//
// Constraints: modify the original array in-place.
// The order of non-zero elements must stay the same.
// Do not use any extra arrays, objects, or sets.
//
// Input:  [0, 1, 0, 3, 12]  →  Output: [1, 3, 12, 0, 0]
// Input:  [0, 0, 1]         →  Output: [1, 0, 0]
// Input:  [1, 2, 3]         →  Output: [1, 2, 3]  (no zeros, unchanged)
// Input:  [0, 0, 0]         →  Output: [0, 0, 0]  (all zeros)

function moveZeros(arr) {
  let left = 0
  for(let i = 0; i < arr.length ; i++){
    if(arr[i] !== 0){
        arr[left] = arr[i]
        left ++
    }   
  }
  while (left< arr.length){
    arr[left] = 0
    left ++
  }
  return arr
}

// Tests
console.log(moveZeros([0, 1, 0, 3, 12])); // → [1, 3, 12, 0, 0]
console.log(moveZeros([0, 0, 1]));         // → [1, 0, 0]
console.log(moveZeros([1, 2, 3]));         // → [1, 2, 3]
console.log(moveZeros([0, 0, 0]));         // → [0, 0, 0]