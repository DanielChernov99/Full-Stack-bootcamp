// You're going to console log these four options conditionally, based on the values you selected for hasOven and works:

// hasOven: true and works: true
// Geraldine's radish expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the radish in.
// hasOven: false and works: true
// Geraldine's radish expired 1 day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in.
// hasOven: true and works: false
// Geraldine's radish expired 1 day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay 250 to fix the fridge.
// hasOven: false and works: false
// Geraldine's radish expired 1 day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in. And she'll have to pay 250 to fix the fridge.
// Note that the expired 1 day ago should be calculated based off the date variable and expiryDate property.

// Also, she'll have to pay 250 to fix the fridge should be calculated based off the price property in fridge - it should be half the price.

// Make sure to only use information from the variables you've been given.

// Do not write out "radish". Instead, use kitchen.fridge.items...

// Hint: Use helper variables to make your life easier. For instance:


const date = 3
const kitchen = {
    owner: "Geraldine",
    hasOven: true,
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const owner = kitchen.owner;
const hasOven = kitchen.hasOven;
const doesWork = kitchen.fridge.works;
const fridgePrice = kitchen.fridge.price;
const items = kitchen.fridge.items;

// new version:
items.forEach(food => {
    if(food.expiryDate < date){
        const daysExpired = date-food.expiryDate;
        const fridgeText = doesWork ? "Weird, considering her fridge works" : "Probably because her fridge doesn't work";

        const OvenText = hasOven ? `Luckily, she has an oven to cook the ${food.name} in` : "Too bad she doesn't have an oven to cook the ${food.name} in.";

        const RepairText = doesWork ? "":`And she'll have to pay ${fridgePrice / 2} to fix the fridge.`

        console.log(`${owner}'s ${food.name} expired ${daysExpired} day ago ${fridgeText} ${OvenText} ${RepairText}`);
    }
});



// Old version : 

// if (hasOven){
//     if(doesWork){
//         items.forEach(food => {
//             if(food.expiryDate < date){
//                 console.log(`${owner}'s ${food.name} expired ${date-food.expiryDate} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${food.name} in.`)
//             }
//         });
//     }
//     else{
//         items.forEach(food => {
//             if(food.expiryDate < date){
//             console.log(`${owner}'s ${food.name} expired ${date-food.expiryDate} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${food.name} in. And she'll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`)
//             }
//         });
//     }
// }
// else{
//     if(doesWork){
//         items.forEach(food => {
//             if(food.expiryDate < date){
//                 console.log(`${owner}'s ${food.name} expired ${date-food.expiryDate} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${food.name} in.`)
//             }
//         });
//     }
//     else{
//         items.forEach(food => {
//             if(food.expiryDate < date){
//                 console.log(`${owner}'s ${food.name} expired ${date-food.expiryDate} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${food.name} in.`)
//             }
//         });
//     }
// }

