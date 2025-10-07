import React, { useState } from 'react';
import InventoryFlow from './components/InventoryFlow';
import ToggleMethod from './components/ToggleMethod';

function App() {
  const [method, setMethod] = useState('FIFO');

  return (
    <div>
      <h1>Inventory Flow Visualizer</h1>
      <ToggleMethod method={method} setMethod={setMethod} />
      <InventoryFlow method={method} />
    </div>
  );
}

export default App;
