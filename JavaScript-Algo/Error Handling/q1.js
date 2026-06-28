const safeJsonParse = function(string){
    try {
        const intoJSON = JSON.parse(string)
        return intoJSON
    } catch (err) {
        return "Invalid JSON format"
    }
}


console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }

console.log(safeJsonParse('invalid json')); 
// Output: "Invalid JSON format"
