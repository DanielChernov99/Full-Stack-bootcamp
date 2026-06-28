const args = process.argv;
const num1 = Number(args[2])
const opp = args[3]
const num2 = Number(args[4])
const vailidOpps = ["+","-","/","*"]
let result = 0
let canPrint = true

if(Number.isNaN(num1)|| Number.isNaN(num2)){
    console.log("please enter valid input"); 
    canPrint = false 
}

else if(!vailidOpps.includes(opp)){
    console.log("not valid opperation");  
    canPrint = false  
}
else{
    if(opp === "+")
        result = num1 + num2
    else if(opp ==="-")
        result = num1 - num2
    else if(opp ==="*")
        result = num1 * num2
    else if(num2 === 0 ){
        console.log("Can not divide by 0"); 
        canPrint = false   
    }
    else{
        result = num1 / num2
    }
}

if (canPrint) console.log(`${num1} ${opp} ${num2} = ${result}`);




// node calculator.js 10 + 5
// # Output: 10 + 5 = 15

// node calculator.js 20 / 4
// # Output: 20 / 4 = 5
