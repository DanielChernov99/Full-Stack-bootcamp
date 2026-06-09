import { log } from 'console';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let person = {}

rl.question(`what is your full name?: `, (answer) => {
    person["fullName"] = answer
        rl.question(`what is your email?: `, (answer) => {
        person["email"] = answer
            rl.question(`what is your age? : `, (answer) => {
            person["age"] = answer
                rl.question(`what is your Favorite Color? : `, (answer) => {
                person["favoriteColor"] = answer
                printSummary(person)
                rl.close()
                })
            })
        })
});



const printSummary = function(person){
    console.log("\nRegistration Summary:");
    console.log(`Name: ${person.fullName}`);
    console.log(`Email: ${person.email}`);
    console.log(`Age: ${person.age}`);
    console.log(`Favorite Color: ${person.favoriteColor}`);
}



