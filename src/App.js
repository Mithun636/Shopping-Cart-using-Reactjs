import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [fruits] = useState([
    { id: 1, name: 'Apple', Kg:'(1KG)',price: 110 },
    { id: 2, name: 'Orange', Kg:'(1KG)', price: 75},
    { id: 3, name: 'Mango',Kg:'(1KG)', price: 150 },
    { id: 4, name: 'Cherry',Kg:'(1KG)', price: 80 },
    { id: 3, name: 'Pine Apple',Kg:'(1KG)', price: 40 },
    { id: 3, name: 'Grapes',Kg:'(1KG)', price: 50 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (fruit) => {
    setCartItems([...cartItems, fruit]);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      
    <h1>Fruit Shop</h1>
      <div class="items">
      <h2>Available Fruits</h2><hr></hr>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} {fruit.Kg} - ₹{fruit.price.toFixed(2)}
            <button onClick={() => addToCart(fruit)} style={{ marginLeft: '10px' }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      </div>
      <div class='cart'>
      <h2>Your Cart</h2><hr></hr>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price.toFixed(2)}
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

