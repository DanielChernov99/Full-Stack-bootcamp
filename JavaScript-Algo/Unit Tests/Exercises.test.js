const Exercises = require("./Exercises")

describe(`Exercises functions`,() =>{

    const exercises = new Exercises()

    test("should return true for 2",() =>{
        expect(exercises.isEven(2)).toBeTruthy()
    })

    test("should return false for 1",() =>{
        expect(exercises.isEven(1)).toBeFalsy()
    })


});