const reverseString = function(str){
    if (str === "") {
        return ""
    }
    return str.at(-1) + reverseString(str.slice(0,-1))

}


console.log(reverseString("abc"));
