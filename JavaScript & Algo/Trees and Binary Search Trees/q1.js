const BSNode = require("./BSNode")

const letters = ["H", "E", "S", "G", "L", "Y", "I"]
let bSTree = new BSNode()
letters.forEach(l => bSTree.insertNode(l))

//Use the following to test
bSTree.findNode("H") // should print true
bSTree.findNode("G") // should print true
bSTree.findNode("Z") // should print false
bSTree.findNode("F") // should print false
bSTree.findNode("y") // should print false - we didn't make the tree case sensitive!