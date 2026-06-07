
export default class BankAccount{
    constructor(balance = 0) {
        if (balance < 0 || Number.isNaN(balance)){
            this.balance = 0
        }
        else{
            this.balance = balance;
        }
    }

    checkBalance(){
        return this.balance;
    }

    depositMoney(amount){
        amount = Number(amount)
        if(Number.isNaN(amount) || (amount <= 0 )){
            return false;
        }
        this.balance += amount;
        return true;
    }
    withdrawMoney(amount){
        amount = Number(amount)
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


