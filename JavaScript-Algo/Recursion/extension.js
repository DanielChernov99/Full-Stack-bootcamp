const stack1 = new Stack([1, 2, 3])
const stack2 = new Stack([])


const swap = function (stack1,stack2){
    if (stack1.isEmpty()) return stack2
    elem = stack1.pop()
    swap(stack1 , stack2)
    stack2.push(elem )
    return stack2
}


swap(stack1,stack2)
console.log("stack1: "+ stack2)
console.log("stack2: " +stack2)