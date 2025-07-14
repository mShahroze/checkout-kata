import React, { useState } from 'react';
import { calculateTotal } from './checkout';

const App: React.FC = () => {
  const [basket, setBasket] = useState<string[]>([]);
  const [item, setItem] = useState<string>('');

  const addItem = () => {
    if (item.trim()) {
      setBasket([...basket, item.trim().toUpperCase()]);
      setItem('');
    }
  };

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
