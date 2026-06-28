const Exercises = require("./Exercises")

describe("Exercises functions", () => {
    const exercises = new Exercises()

    describe("isEven", () => {
        test("should return truthy value when number is even", () => {
            expect(exercises.isEven(2)).toBeTruthy()
        })

        test("should return falsy value when number is odd", () => {
            expect(exercises.isEven(1)).toBeFalsy()
        })
    })

    describe("removeAtLeastOne", () => {
        test("should remove at least one element from array with one item", () => {
            const arr = [1]
            const originalLength = arr.length

            const result = exercises.removeAtLeastOne(arr)

            expect(result.length).toBeLessThan(originalLength)
        })

        test("should remove at least one element from array with three items", () => {
            const arr = [1, 2, 3]
            const originalLength = arr.length

            const result = exercises.removeAtLeastOne(arr)

            expect(result.length).toBeLessThan(originalLength)
        })
    })

    describe("simplify", () => {
        const symbols = ["!", "#", ".", ",", "'"]

        test("string without symbols should stay the same", () => {
            const before = "hello this is a test"

            const after = exercises.simplify(before)

            expect(after).toEqual(before)
        })

        test("string with symbols should not contain them after", () => {
            const before = "hello! th#is is a ,test"
            const afterExpected = "hello this is a test"

            const result = exercises.simplify(before)

            expect(result).toEqual(afterExpected)

            symbols.forEach(s => {
                expect(result).not.toContain(s)
            })
        })
    })

    describe("validate", () => {
        test("should return error object if there are no booleans", () => {
            const arr = ["test", 123, {}]

            const result = exercises.validate(arr)

            expect(result).toEqual({ error: "Need at least one boolean" })
        })

        test("should return error object for empty array", () => {
            const arr = []

            const result = exercises.validate(arr)

            expect(result).toEqual({ error: "Need at least one boolean" })
        })

        test("should return true if there are more trues than falses", () => {
            const arr = [true, true, false]

            const result = exercises.validate(arr)

            expect(result).toBe(true)
        })

        test("should return false if there are more falses than trues", () => {
            const arr = [true, false, false]

            const result = exercises.validate(arr)

            expect(result).toBe(false)
        })

        test("should return false if trues and falses are equal", () => {
            const arr = [true, false]

            const result = exercises.validate(arr)

            expect(result).toBe(false)
        })

        test("should return false if all booleans are false", () => {
            const arr = [false, false, false]

            const result = exercises.validate(arr)

            expect(result).toBe(false)
        })
        test("should return true if there is one true and no false", () => {
            const arr = [true]

            const result = exercises.validate(arr)

            expect(result).toBe(true)
        })
    })
})