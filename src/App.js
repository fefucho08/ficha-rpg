import './App.css';
import Header from './components/header/header';
import Info from './components/info/info'
import Tests from './components/tests/tests';
import Inventory from './components/inventory/inventory';

function App() {
  return (
    <div className="App">
      <Header/>
      <Info/>
      <Tests/>
      <Inventory/>
    </div>
  );
}

export default App;
