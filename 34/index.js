let pizza = ["bihari kabab", "chicken fajita", "pepperoni"];
const favPizza = (pizzaList) => {
  for (let i = 0; i < pizzaList.length; i++) {
    console.log(`I like ${pizzaList[i]} pizza`);
  }
  console.log("I really love pizza!");
};

favPizza(pizza);
