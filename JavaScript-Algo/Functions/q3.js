const checkExists = function(arr, number){
    return arr.includes(number);
}
let num = 5
let arr = [1,2,5]
console.log(`the  number ${num} is in ${arr}?  -> ${checkExists(arr,num)}`)