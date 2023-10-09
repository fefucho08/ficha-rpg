import { useEffect, useState } from 'react';
import Header from '../components/sheetPage/header/header'
import Info from '../components/sheetPage/info/info'
import Tests from '../components/sheetPage/tests/tests';
import Inventory from '../components/sheetPage/inventory/inventory';
import Rituals from '../components/sheetPage/rituals/rituals';
import Extra from '../components/sheetPage/extra/extra';
import CharactersNavigation from '../components/sheetPage/navigation/navigation'
import {toast} from 'react-hot-toast';
import './sheet.css'
import character from '../character.json'

export default function Sheet(props) {
  const {characters, setCharacters, currentCharacter, setCurrentCharacter} = props
  const [loadedData, hasLoadedData] = useState(false)
  const [userData, setUserData] = useState({})

  const getUserData = async (id) => {
    try {
      const res = await fetch(`https://servidorrpg.onrender.com/users/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (res.ok) {
        const data = await res.json();
        if (data.characters.length === 0) {
          const defaultCharacter = JSON.parse(JSON.stringify(character));
  
          data.characters = [defaultCharacter];
        }
        setCharacters(data.characters);
        setUserData(data);
        hasLoadedData(true);
      } else {
        toast.error('Erro ao buscar dados do usuário');
      }
    } catch (err) {
      console.error(err);
      toast.error('Erro ao buscar dados do usuário');
    }
  }

  
  const saveUserCharacters = async () => {
    try {
      const userId = sessionStorage.getItem("userId");
      if (userId && loadedData) {
        await fetch(`https://servidorrpg.onrender.com/users/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...userData, // Send the updated userData object
            characters: characters
          })
        });
        console.log(characters);
      }
    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (userId) {
      getUserData(userId);
    }
    }, [])
    
    useEffect(() => {
      saveUserCharacters()
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