// Create a class called ShoppingCart.

// Create a constructor that has no arguments and sets the total attribute to zero, and initializes an empty dict attribute named items.

// Create a method add_item that requires item_name, quantity and price arguments. This method should add the cost of the added items to the current value of total. It should also add an entry to the items dict such that the key is the item_name and the value is the quantity of the item.

// Create a method remove_item that requires similar arguments as add_item. It should remove items that have been added to the shopping cart and are not required. This method should deduct the cost of these items from the current total and also update the items dict accordingly. If the quantity of items to be removed exceeds current quantity in cart, assume that all entries of that item are to be removed.

// Create a method checkout that takes in cash_paid and returns the value of balance from the payment. If cash_paid is not enough to cover the total, return Cash paid not enough.

// Create a class called Shop that has a constructor which initializes an attribute called quantity at 100.

// Make sure Shop inherits from ShoppingCart.

// In the Shop class, override the remove_item method, such that calling Shop's remove_item with no arguments decrements quantity by one.

class ShoppingCart {
  constructor() {
    this.total = 0;
    this.items = {};
  }
  
  addItem (itemName, quantity, price ) {
    this.total += (quantity * price);
    if (this.items[itemName]) {
      this.items[itemName] += quantity;
    }
    else{ this.items[itemName] = quantity; }
  }
  
  removeItem(itemName, quantity, price) {
    this.total -= (quantity * price);
     if (this.items[itemName] < quantity) {
      this.items[itemName] = 0;
    } else {
      this.items[itemName] -= quantity;
    }
  }
  
  checkout(cashPaid) {
    const balance = cashPaid - this.total;
    if (balance > 0) {
      return balance;
    } return 'Cash paid not enough';
    
  }
}

class Shop extends ShoppingCart {
  constructor() {
    super();
    this.quantity = 100;
  }

  removeItem() {
    this.quantity -= 1;
  }
}

// initializing ShoppingCart class
const cart = new ShoppingCart();
cart.addItem("apple", 1, 20);
cart.addItem("apple", 1, 20);
cart.addItem("orange", 3, 20);
cart.removeItem("apple", 1, 20);
cart.removeItem("apple", 1, 20);
console.log(cart.total);
console.log(cart.items);

// initializing ShoppingCart class
const shop = new Shop();
shop.removeItem();
shop.removeItem();

console.log(shop.quantity);