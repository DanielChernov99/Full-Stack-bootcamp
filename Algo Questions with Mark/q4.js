//#4
//Given an array of integers, return how many numbers
// in the array are strictly greater than the average.
//
// Constraints: the array will always have at least one element.
//
// Input:  [1, 2, 3, 4, 5]  →  Output: 2  (4 and 5 are above average 3)
// Input:  c →  Output: 1  (only 20 is above average 12.5)

function countAboveAverage(arr) {
  // your code here
  const sum  = arr.reduce((sum,item)=>{
    sum += item
    return sum
  },0)

  const avg = sum / arr.length
  let moreThenAVG = 0
  arr.forEach(num => {
        if( num > avg) moreThenAVG += 1
  });
  return moreThenAVG
}

arr1 = [1, 2, 3, 4, 5]
arr2 = [10, 10, 10, 20]

console.log(countAboveAverage(arr1));
console.log(countAboveAverage(arr2));

