// Currently your UniqueArray only knows to handle primitive types.

// Modify it so that it can work with any type of data.

// How you do it depends on how you built UniqueArray in the first place, but likely you will have to:

// Modify how your exists method works
// In particular, you'll have to determine how to compare objects to find a match
// Hint: {x: 3} === {x: 3} returns false
// Modify your add method

const UniqueArray = function(){
    let array = []
    let items = {}

    const getKey = function(item){
        if (typeof item === "object"){
            return `${typeof(item)}-${JSON.stringify(item)}`
        }
        return `${typeof(item)}-${item}`
    }
    const add = function(item){
        const key = getKey(item)
        if (!(key in items)){
            array.push(item)
            items[key] = item;
        }
    }
    const showAll = function(){
        console.log(array)
    }
    const exists = function(item){
        const key = getKey(item)
        return key in items 
    }
    const get = function(index){
        return index >= 0 && index < array.length ? array[index] : -1
    }
    return {add,showAll,exists,get}
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
