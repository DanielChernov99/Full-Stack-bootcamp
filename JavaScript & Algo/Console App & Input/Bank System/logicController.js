
class BankAccount{
    constructor(balance = 0) {
    this.balance = balance;
    }

    checkBalance(){
        return this.balance;
    }

    depositMoney(amount){
        if(Number.isNaN(amount) || (amount <= 0 )){
            return false;
        }
        this.balance += amount;
        return true;
    }
    withdrawMoney(amount){
        if(Number.isNaN(amount) || (amount <= 0 )){
            return false;
        }
        if(amount > this.balance){
            return false;
        }
        this.balance -= amount;
        return true;
    }
}


