import './App.css';
import Header from './components/header/header';
import Info from './components/info/info'
import Tests from './components/tests/tests';
import Inventory from './components/inventory/inventory';
import { useState } from 'react';

function App() {

  const [Str, setStr] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Info/>
      <Tests setStr = {setStr}/>
      <Inventory str = {Str}/>
    </div>
  );
}

export default App;
