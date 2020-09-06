import React from 'react';
import Cmp from './Cmp';

function App() {
  return (
    <div className="App">
      Who are ITZY?
      <ul>
        <Cmp name="ryujin" />
        <Cmp name="yuna" />
        <Cmp name="lia" />
        <Cmp name="yeji" />
        <Cmp name="chaeryong" />
      </ul>
    </div>
  );
}

export default App;
