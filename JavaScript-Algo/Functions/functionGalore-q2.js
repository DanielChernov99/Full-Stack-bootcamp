const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

let seenBeforeAndCount = {}


const cleanText = function(sentence) {
    sentence = sentence.toLowerCase()

    for (const char of specialChars) {
        sentence = sentence.split(char).join("")
    }

    return sentence.split(" ")
}

const addToCounter = function(word){
    if(wordCounts[word]){
        wordCounts[word]++;
    }
    else{
        wordCounts[word] = 1
    }
}

const countWords = function(sentence){
    let cleanSentence = cleanText(sentence);
    for (const word of cleanSentence) {
        addToCounter(word)
    }    
}


countWords(story)

console.log(wordCounts)
