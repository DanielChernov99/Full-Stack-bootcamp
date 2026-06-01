// Create two 'people' objects, p1 and p2. Each should have the following properties:

// name
// age
// city
// Write some code with the following logic:

// If the people are the same age
// If the people live in the same city
// Print "Jill wanted to date Robert"
// If they're not in the same city
// Print "Jill wanted to date Robert, but couldn't"
// Note that the only data should be in the objects - in your if conditions, make sure to use the objects' properties (keys)

let Jill = {
    name : "Jill",
    age : 26,
    city : "Haifa",

}

let Robert = {
    name : "Robert",
    age : 26,
    city : "New York",
}

if(Jill.age === Robert.age && Jill.city === Robert.city){
    console.log("Jill wanted to date Robert")
}   
else{
    console.log("Jill wanted to date Robert, but couldn't")
}



