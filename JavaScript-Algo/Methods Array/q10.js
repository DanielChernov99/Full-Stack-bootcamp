let cartItems = [
    { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
    { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
    { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
    { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
    { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 }
]


// sum = 1000
 


let taxRates = {
    clothing: 0.08,    // 8% tax
    electronics: 0.10, // 10% tax  
    food: 0.05        // 5% tax
}



// let totalSumClothing = cartItems.filter(u => u.category ==="clothing").reduce((sum,item) => item.price * item.quantity * (1+taxRates.clothing) + sum, 0)
// let totalSumelectronics = cartItems.filter(u => u.category ==="electronics").reduce((sum,item) => item.price * item.quantity * (1+taxRates.electronics) + sum, 0)
// let totalSumFood = cartItems.filter(u => u.category ==="food").reduce((sum,item) => item.price * item.quantity * (1+taxRates.food) + sum, 0)

// const totalSum = totalSumClothing + totalSumelectronics + totalSumFood


let totalSum = cartItems.reduce((sum,item) =>  {
        let subSum = item.price * item.quantity;
        let tax = subSum * taxRates[item.category];
        sum += subSum + tax;       
        return sum;
    },0)


console.log(totalSum)

