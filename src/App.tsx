import React, { useState } from 'react';
import { calculateTotal } from './checkout';

const App: React.FC = () => {
  // Store the list of items added to the basket
  const [basket, setBasket] = useState<string[]>([]);
  // Controlled input state for the current item being typed
  const [item, setItem] = useState<string>('');

  // Add the current item to the basket
  const addItem = () => {
    if (item.trim()) {
      // Add item in uppercase (e.g. "a" becomes "A") to match pricing rules
      setBasket([...basket, item.trim().toUpperCase()]);
      // Clear the input field after adding
      setItem('');
    }
  };

  // Get the current total price for all items in the basket
  const total = calculateTotal(basket);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Checkout System</h1>
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter item (A, B, C, D)"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <h2>
        Basket: {basket.length > 0 ? basket.join(', ') : 'Empty'}
      </h2>
      <h2>Running Total: £{(total / 100).toFixed(2)}</h2>
    </div>
  );
};

export default App;
