// call() & apply() - Is a native javascript method in the
// function prototype object.
// It provides a way of calling function by passing in 
// an object and arguments to to the function called.

const car1 = {
  brand: 'Toyota',
  getDescription: function(color, price) {
    console.log(`This car ${this.brand}. is ${color} color and cost $${price}`)
  }
}

const car2 = {
  brand: 'Lamborghini',
}

car1.getDescription('Yellow', 300)
car1.getDescription.call(car2, 'Blue', 500)
car1.getDescription.apply(car2, ['Red', 1000])