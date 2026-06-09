if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound) //referenceError for the cowSound
}

// cowSound will be undefined for the else scope because its in the if scope
// will have referenceError