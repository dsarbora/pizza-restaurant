function Toppings(type, cost, id){
  this.type = type,
  this.cost = cost,
  this.id = id
}

function Pizza(toppings, size, costBreakdown, cost){
  this.toppings = [],
  this.size = size,
  this.costBreakdown = costBreakdown,
  this.cost = cost
};

Pizza.prototype.addToppings = function(toppingsList){
  toppingsList.forEach(topping){
    this.toppings.push(topping);
    var toppingCost =
    this.costBreakdown.push()
  };
};





//  FRONT END
