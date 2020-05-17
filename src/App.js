import React from 'react';
import './App.css';
import Slot from './components/slot'

function App() {
  return (
    <div className="App">
      <h1>Slot Machines !</h1>
      <br/>
      <br/>
      <br/>
      <Slot
      s1='🍇'
      s2='🍓'
      s3='🍑'/>
    </div>
  );
}

export default App;
