// #10
// Given a sorted array of integers, remove the duplicates in-place
// so each element appears only once, and return the new length.
// The array is sorted, so duplicates will always be adjacent.
//
// Constraints: do not create a new array, modify the original in-place.
// The order of elements must stay the same.
//
// Input:  [1, 1, 2, 3, 3, 4]  →  Output: 4  (array becomes [1, 2, 3, 4])
// Input:  [1, 1, 1, 1]        →  Output: 1  (array becomes [1])
// Input:  [1, 2, 3]           →  Output: 3  (no duplicates, unchanged)

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < arr.length; read++) {
    if (arr[read] !== arr[read - 1]) {
      arr[write] = arr[read];
      write++;
    }
  }
  arr.length = write;
  return write;
}

// Tests
console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // → 4
console.log(removeDuplicates([1, 1, 1, 1]));        // → 1
console.log(removeDuplicates([1, 2, 3]));           // → 3