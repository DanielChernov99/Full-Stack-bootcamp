import promptSync from 'prompt-sync';
import BankAccount from './BankAccount.js';
const prompt = promptSync();


const user = new BankAccount(100)

const showMenu = function(){
    console.log(`
    === Banking System ===
    1) Check Balance
    2) Deposit Money
    3) Withdraw Money
    4) Exit
    `)
}

let notDone = true

while(notDone){
    showMenu()
    let choice = prompt("Choose option (1-4): ")
    let amount = 0
    let result = false
    switch(choice) {
    case "1":
        console.log(`Current Balance : ${user.checkBalance()}`)
        break;
    case "2":
        amount = prompt("Enter amount to deposit: ")
        result = user.depositMoney(amount)
        if (result){
            console.log(`New Balance : ${user.checkBalance()}`);
        }
        else{
            console.log("Operation failed, please try again")
        }
      
        break;
    case "3":
        amount = prompt("Enter amount to withdraw: ")
        result = user.withdrawMoney(amount)
        if (result){
            console.log(`New Balance : ${user.checkBalance()}`);
        }
        else{
            console.log("Operation failed, please try again")
        }
        break;
    case "4":
        notDone = false
        console.log("See you next time");
        
        break;
    default:
        console.log("please enter valid option");
        
    }

}


