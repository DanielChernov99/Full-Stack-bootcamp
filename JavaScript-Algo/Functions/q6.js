const printAllArmstrong3Digits = function(){
    for (let num = 100; num <= 999; num++) {
        const ones = num % 10;
        const tens = Math.floor(num  /10)  % 10;
        const hundreds = Math.floor(num /100)  % 10;
        const sum = ones** 3 +tens** 3 + hundreds**3
        if(sum === num){
            console.log(num)
        }
    }   
}

printAllArmstrong3Digits()