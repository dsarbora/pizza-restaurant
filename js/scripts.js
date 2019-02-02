var toppings = [
  ["extra cheese", 1],
  ["pepperoni", 1.5],
  ["sausage", 1.5],
  ["onions", 1],
  ["bell peppers", 1]
]

var sizes = [
  ["small", 8.99],
  ["medium", 10.99],
  ["large", 12.99]
]

function Pizza(toppings, size, costBreakdown, cost){
  this.toppings = [],
  this.size = size,
  this.costBreakdown = [],
  this.cost = cost
};

Pizza.prototype.addSize = function(pizzaSize){
  this.size = sizes[pizzaSize][0];
  this.costBreakdown.push(sizes[pizzaSize][1]);
}

Pizza.prototype.addTopping = function(topping){
    this.toppings.push(toppings[topping][0]);
    this.costBreakdown.push(toppings[topping][1]);

  };

Pizza.prototype.totalCost = function(){
  price = 0;
  this.costBreakdown.forEach(function(cost){
    price += cost;
  });
  return price;
}




//  FRONT END


$(function(){
  $("#pizzaOrder").submit(function(){
    event.preventDefault();
    var pizza = new Pizza();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    pizza.addSize(pizzaSize);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      pizza.addTopping(topping);
    });
    var totalCost = pizza.totalCost().toFixed(2);
    $("#cost").text(totalCost);
    $("#result").show();
  });
});
