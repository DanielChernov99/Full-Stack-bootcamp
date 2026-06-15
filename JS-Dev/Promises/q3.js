// Simulated inventory database
const inventory = {
  'laptop': { price: 999, stock: 5 },
  'mouse': { price: 25, stock: 10 },
  'keyboard': { price: 75, stock: 0 }, // Out of stock
  'monitor': { price: 299, stock: 3 }
};



function checkInventory(items) {
    // TODO: Return a promise that:
    // 1. Waits 500ms (simulating database check)
    // 2. Checks if all items are in stock
    // 3. Resolves with items if all available
    // 4. Rejects with specific item that's out of stock
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const missingItems = []

      items.forEach(itemName => {
        if (!inventory[itemName] || inventory[itemName].stock === 0) {
          missingItems.push(itemName)
        }
      })

      if (missingItems.length > 0) {
        reject(new Error(`${missingItems.join(", ")} out of stock`))
      } else {
        resolve(items)
      }
    }, 500)
  })
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const taxRate = 0.08
            let subtotal = items.reduce((sum, item) =>{
                return sum += inventory[item].price
            },0)
            const tax = subtotal * taxRate
            const total = subtotal + tax
            resolve({subtotal, tax , total})
        },200)
    })
}

function processPayment(amount) {
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
        const random = Math.random();
        if(random < 0.9){
            const transactionId = `TX-${Date.now()}`
            resolve({transactionId,amount,status:"success"})
        }
        else{
            reject(new Error("Payment didnt worked,sorry"))
        }
    },1500)
  })
}

function updateInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  // TODO: Implement the complete checkout flow
}

// Test cases:
checkout(['laptop', 'mouse'])           // Should succeed
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['laptop', 'keyboard'])        // Should fail - keyboard out of stock
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) // Might fail at payment (10% chance)
  .then(result => console.log('Order success:', result))
  .catch(error => console.log('Order failed:', error.message));
