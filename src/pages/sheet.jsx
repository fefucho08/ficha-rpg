import { useEffect, useState } from 'react';
import Header from '../components/sheetPage/header/header'
import Info from '../components/sheetPage/info/info'
import Tests from '../components/sheetPage/tests/tests';
import Inventory from '../components/sheetPage/inventory/inventory';
import Rituals from '../components/sheetPage/rituals/rituals';
import Extra from '../components/sheetPage/extra/extra';
import CharactersNavigation from '../components/sheetPage/navigation/navigation'
import './sheet.css'
import character from '../character.json'

export default function Sheet(props) {
    const {characters, setCharacters, currentCharacter, setCurrentCharacter} = props
    const [loadedData, hasLoadedData] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("charactersArr") === null){
          const inicialCharacter = JSON.parse(JSON.stringify(character));
          setCharacters([inicialCharacter])
        }
        hasLoadedData(true)
      }, [])
    
      useEffect(() => {
        if(characters.length > 0)
          localStorage.setItem("charactersArr", JSON.stringify(characters))
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
    
      return (loadedData) ? (
    
          <div className="sheet">
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