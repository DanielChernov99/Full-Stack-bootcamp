const isEven = function(number){
    return number % 2 == 0; 
}
let num = 5
console.log(`is ${num} even? ${isEven(num)}`);

const printOdds = function(numbersArr){
    for (const element of numbersArr) {
        if (!isEven(element)){
            console.log(element)
        }
    }
}

printOdds([1, 2, 3, 4, 5, 6, 7])