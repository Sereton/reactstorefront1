import React from 'react';


import './App.css';
import Filatarjeta from './filatarjeta.jsx';

function App() {
  return (
    <div className="App">
     <Filatarjeta clase="trescol" clasehija="azul" numcol={3} />
     <Filatarjeta clase="doscol" clasehija="roja"  numcol={2} />
    </div>
  );
}

export default App;
