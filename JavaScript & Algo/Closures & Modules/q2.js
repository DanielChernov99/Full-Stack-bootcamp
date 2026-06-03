const Bank = function(){
    let _money = 500;

    const deposit = function(amount){
        _money += amount;
    }

    const showBalance = function(){
        console.log(_money);
        
    }

    return {deposit,showBalance};
}


const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
