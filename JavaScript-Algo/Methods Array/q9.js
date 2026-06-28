let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81]


let countedGrades = 
    {
        "A" : studentScores.filter(g => g >= 90).length,  
        "B" : studentScores.filter(g => g < 90 && g >= 80).length,
        "C" : studentScores.filter(g => g < 80 && g >= 70).length,
        "F" : studentScores.filter(g => g < 70).length,
    }   


console.log(countedGrades)