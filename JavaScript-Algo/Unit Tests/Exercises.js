class Exercises  {
    //should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }
    
    validate(arr){
        const booleans = arr.filter(item => typeof item === "boolean")

        if (booleans.length === 0) {
            return { error: "Need at least one boolean" }
        }
        const manyTrue = booleans.reduce((sum,item) =>{
            return sum += item === true
        },0)
        const manyfalse = booleans.reduce((sum,item) =>{
            return sum += item === false
        },0)
        return manyTrue > manyfalse
    }



}


module.exports = Exercises