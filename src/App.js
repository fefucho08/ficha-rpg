import './App.css';
import Header from './components/header/header';
import Info from './components/info/info'
import Tests from './components/tests/tests';
import Inventory from './components/inventory/inventory';
import Rituals from './components/rituals/rituals';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {

  const [Str, setStr] = useState(0)

  return (
    <div className="App">
      <Toaster position='top-center'/>
      <Header/>
      <Info/>
      <Tests setStr = {setStr}/>
      <Inventory str = {Str}/>
      <Rituals/>
    </div>
  );
}

export default App;
