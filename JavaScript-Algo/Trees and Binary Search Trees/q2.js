const BSNode = require("./BSNode")



const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
let bSTree = new BSNode()
letters.forEach(l => bSTree.insertNode(l))
    
console.log(bSTree.findCommonParent("B", "I")) //should return "H"
console.log(bSTree.findCommonParent("B", "G") )//should return "E"
console.log(bSTree.findCommonParent("B", "L") )//should return "J"
console.log(bSTree.findCommonParent("L", "Y") )//should return "R"
console.log(bSTree.findCommonParent("E", "H") )//should return "J"
