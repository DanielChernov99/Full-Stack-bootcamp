const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()


//will have referenceError for the seed in line 9 because its inside the scopre of getSeed() and plant does not know it
