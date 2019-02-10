var toppings = [
  ["extra cheese", 1],
  ["pepperoni", 1.5],
  ["sausage", 1.5],
  ["onions", 1],
  ["bell peppers", 1]
];

function getChosenToppings(pizza){
  var chosenToppings = $("input:checkbox[name=toppings]:checked");
  chosenToppings.each(function(){
    var topping = $(this).val();
    pizza.addTopping(topping);
  });
};

var sizes = [
  ["small", 8.99],
  ["medium", 10.99],
  ["large", 12.99]
];

function PizzaList(pizzas){
  this.pizzas = []
};

PizzaList.prototype.addPizza = function(pizza){
  this.pizzas.push(pizza)

}

PizzaList.prototype.makePizza = function(){
  pizza = new Pizza();
  var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
  pizza.addSize(pizzaSize);
  this.addPizza(pizza);

};

function Pizza(costBreakdown){
  this.costBreakdown = []
};

Pizza.prototype.addSize = function(pizzaSize){
  this.costBreakdown.push(sizes[pizzaSize][1]);
}

Pizza.prototype.addTopping = function(topping){
    this.costBreakdown.push(toppings[topping][1]);
  };

Pizza.prototype.returnPrice = function(){
  price = 0;
  this.costBreakdown.forEach(function(cost){
    price += cost;
  });
  return price;
}

//  FRONT END
pizzaList = new PizzaList()

$(function(){
  $("#pizzaOrder").submit(function(){
    event.preventDefault();
    pizzaList.makePizza()
    var newPizza = pizzaList.pizzas[pizzaList.pizzas.length-1]
    getChosenToppings(newPizza)
    var totalCost = newPizza.returnPrice().toFixed(2);
    $("#cost").text(totalCost);
    $("#result").show();
  });
});
