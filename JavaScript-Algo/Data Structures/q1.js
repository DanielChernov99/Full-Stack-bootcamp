// Create a data structure called UniqueArray

// It should have four methods:

// add(item)
// Stores the item only if it hasn't been added already
// showAll()
// Shows all the added items
// exists(item)
// Returns true if the item has been added, false otherwise
// This should run in O( 1 )
// get(index)
// Returns the item at index index, or -1 if it doesn't exit
// Effectively, this data structure works like a normal array (for the most part), but:

const UniqueArray = function(){
    let array = []
    let items = {}

    const add = function(item){
        if (!items[item]){
            array.push(item)
            items[item] = true;
        }
    }
    const showAll = function(){
        console.log(array)
    }
    const exists = function(item){
        return items[item] ? true : false
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
