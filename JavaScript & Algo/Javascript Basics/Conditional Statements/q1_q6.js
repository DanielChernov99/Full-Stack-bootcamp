
// ------Q1-------------------------------------------

let age = 20;
// Your conditional code here
console.log( age > 18 ? "Can vote" : "too young to vote");


// ------Q2------------------------------------------
let score = 85;
// Your conditional code here
if (score >= 90) {
    console.log("Got A");
} else if (score >= 80) {
    console.log("Got B");
} else if (score >= 70) {
    console.log("Got C");
} else if (score >= 60) {
    console.log("Got D");
} else {
    console.log("Got F");
}


// ------Q3----------------------------------------------
let temperature = 20;
let weather = "sunny";
// Your conditional code here
if (weather === "sunny"){
    if(temperature > 24){
        console.log("Go to the beach");
    }
    else if(temperature >= 15){
        console.log("Go for a walk");
    }
    else{
        console.log("Stay inside and read");
    }

}
else if(weather === "cloudy"){
    if(temperature > 21){
        console.log("Go hiking");
    }
    else{
        console.log("Visit a museum");
    }
}
else{
    console.log("Watch a movie indoors");
}


// ------Q4----------------------------------------------
// Username must be at least 5 characters
// Password must be at least 8 characters
// User must be 13 or older
// Display specific error messages for each failed condition or success message if all pass
let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;
// Your conditional code here
if (usernameLength < 5) {
    console.log("Username must be at least 5 characters");
} else if (passwordLength < 8) {
    console.log("Password must be at least 8 characters");
} else if (userAge < 13) {
    console.log("User must be at least 13 years old");
} else {
    console.log("Everything is good");
}


// ------Q5----------------------------------------------
// VIP customers: 20% discount always
// Premium customers: 15% on weekends, 10% on weekdays
// Regular customers: 10% if purchase > $100, 5% if purchase > $50, 0% otherwise
// Weekends are represented by day 6 (Saturday) or 0 (Sunday)

let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.
// Your conditional code here

if(customerType ==="VIP"){
    purchaseAmount *= 0.8
}
else if(customerType ==="premium"){
    if (dayOfWeek % 7 > 5){
        purchaseAmount *= 0.85
    }
    else{
        purchaseAmount *= 0.9
    }
}
else{
    if(purchaseAmount > 100){
        purchaseAmount *= 0.9
    }
    else if(purchaseAmount > 50){
        purchaseAmount *= 0.95
    }
}

// ------Q6----------------------------------------------
let year = 2024;
// Your conditional code here
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}


