const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
};

// let finalText = "Words that begin with "; 
let finalText= ""
for (const i in dictionary) {
    finalText += "Words that begin with " + i + ":\n";
    const currentArr = dictionary[i];
    for (const word of currentArr) {
        finalText += "  " + word + "\n";
    } 
}

console.log(finalText);