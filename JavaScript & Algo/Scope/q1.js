const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 

//console will log 8 times running and then
//"Finished running  8  miles" and then   
//console will throw distance is not defined
// line 11 will be a problem because distance is inside the if scope and line 11 does not know it
// distance belong to the if scope
