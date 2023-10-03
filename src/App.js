import './App.css';
import Header from './components/header/header';
import Info from './components/info/info'
import Tests from './components/tests/tests';
import Inventory from './components/inventory/inventory';
import Rituals from './components/rituals/rituals';
import Extra from './components/extra/extra';
import CharactersNavigation from './components/navigation/navigation';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import character from './character.json';

function App() {

  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(0)
  
  useEffect(() => {
    if(localStorage.getItem("charactersArr") === null){
      const inicialCharacter = JSON.parse(JSON.stringify(character));
      setCharacters([inicialCharacter])
    }
    else {
      const localArr = localStorage.getItem("charactersArr")
      const charactersArr = JSON.parse(localArr);
      setCharacters(charactersArr)
    }
  }, [])

  useEffect(() => {
    if(characters.length > 0)
      localStorage.setItem("charactersArr", JSON.stringify(characters))
  }, [characters])

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

  return (characters.length > 0) ? (

      <div className="App">
        <Toaster position='top-center'/>
        <CharactersNavigation
          currentCharacter = {currentCharacter}
          setCurrentCharacter = {setCurrentCharacter}
          characters = {characters}
          setCharacters = {setCharacters}
        />
        <div className='sheetContent'>
          <Header 
            currentCharacter = {currentCharacter}
            setCurrentCharacter = {setCurrentCharacter}
            characters = {characters}
            setCharacters = {setCharacters}
          />
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
            setCharacters = {setCharacters}
          />
          <Rituals
            currentCharacter = {currentCharacter} 
            change = {change} 
            characters = {characters}
          />
          <Extra
            currentCharacter = {currentCharacter} 
            change = {change} 
            characters = {characters}
          />
        </div>
      </div>
    ) : "";

}

export default App;
