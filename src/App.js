import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [fruits] = useState([
    { id: 1, name: 'Apple', Kg: '(1KG)', price: 110 },
    { id: 2, name: 'Orange', Kg: '(1KG)', price: 75 },
    { id: 3, name: 'Mango', Kg: '(1KG)', price: 150 },
    { id: 4, name: 'Cherry', Kg: '(1KG)', price: 80 },
    { id: 5, name: 'Pineapple', Kg: '(1KG)', price: 40 },
    { id: 6, name: 'Grapes', Kg: '(1KG)', price: 50 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (fruit) => {
    const existingItem = cartItems.find(item => item.id === fruit.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === fruit.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...fruit, quantity: 1 }]);
    }
  };

  const removeFromCart = (fruit) => {
    const existingItem = cartItems.find(item => item.id === fruit.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== fruit.id));
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === fruit.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Fruit Shop</h1>
      <div className="items">
        <h2>Available Fruits</h2>
        <hr />
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit.id}>
              {fruit.name} {fruit.Kg} - ₹{fruit.price.toFixed(2)}
              <button onClick={() => addToCart(fruit)} style={{ marginLeft: '10px',float:'right' }}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
        <hr />
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} x {item.quantity} - ₹{(item.price * item.quantity).toFixed(2)}
                  <button onClick={() => removeFromCart(item)} style={{ marginLeft: '10px',float:'right'  }}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h3>Total: ₹{total.toFixed(2)}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
