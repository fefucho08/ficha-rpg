import './App.css';
import Header from './components/header/header';
import Info from './components/info/info'
import Tests from './components/tests/tests';
import Inventory from './components/inventory/inventory';
import Rituals from './components/rituals/rituals';
import Extra from './components/extra/extra';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import character from './character.json';

function App() {

  const [currentCharacter, setCurrentCharacter] = useState(0)
  const inicialCharacter = JSON.parse(JSON.stringify(character));
  const [characters, setCharacters] = useState([inicialCharacter])

  useEffect(() => {
    console.log(characters)
  }, [characters])


  function change(param, content, id){
    setCharacters(characters.map(character => {
      if(character.id === id){
        return {...character, [param]: content}
      }
      else {
        return character
      }
    }))
  }
  return (
    <div className="App">
      <Toaster position='top-center'/>
      <Header />
      <Info 
        currentCharacter = {currentCharacter} 
        change = {change} 
        characters = {characters}
      />
      <Tests
        currentCharacter = {currentCharacter} 
        change = {change} 
        characters = {characters}
      />
      <Inventory 
        currentCharacter = {currentCharacter} 
        change = {change} 
        characters = {characters}
      />
      <Rituals/>
      <Extra/>
    </div>
  );
}

export default App;
