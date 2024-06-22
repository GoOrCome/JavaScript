function calculateTotalCartValue() {
    let totalValue = 0;
    for (let index = 0; index < arguments.length; index++) {
      totalValue += arguments[index];
    }
    console.log(`The total cart value is ${totalValue}`);
    return totalValue;
  }
  
  calculateTotalCartValue(125, 20, 30);
  
  // OUTPUT: The total cart value is 175
  