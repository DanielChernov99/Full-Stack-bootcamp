const coffeeShop = {
  beans: 40,
  money: 500,
  beansCost : 30,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 5},
    doubleShot: {beanRequirement: 15, price: 5},
    frenchPress: {beanRequirement: 12, price: 5},
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    
    if(drinkType in this.drinkRequirements){
    const drink = this.drinkRequirements[drinkType];
    const beansNeeded = drink.beanRequirement;
    (this.beans >= beansNeeded ) ? this.beans -= beansNeeded : console.log("Sorry, we're all out of beans!");                          
    }
    else{
        console.log(`Sorry, we don't make ${drinkType}`);
    }
  },
  
  buyBeans : function (numBeans){
    const moneyNeededToBuy = numBeans * this.beansCost
    if(this.money >= moneyNeededToBuy){
        this.beans += numBeans;
        this.money -= numBeans *this.beansCost;
    }
    else console.log("Not enoght money to buy");
  },

  buyDrink : function(drinkType){ 
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
        this.makeDrink(drinkType);
        
    }
    else{
        this.money += drink.price;
        this.makeDrink(drinkType);
    }
    }

}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");
