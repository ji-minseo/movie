import React from 'react';
import Cmp from './Cmp';

const blackpink = [{ name: "jennie", img: "link" }, { name: "jisoo", img: "link" }];

function App() {
  return (
    <div className="App">
      Who are ITZY?
      {blackpink.map(member => <Cmp name={member.name} img={member.img} />)}
    </div>
  );
}

export default App;
