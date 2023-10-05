import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './layout/navbar';
import Home from './pages/home';
import Characters from './pages/characters';
import Sheet from './pages/sheet';
import GameMaster from './pages/gm';

function App() {

  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const [loadedData, hasLoadedData] = useState(false)


  useEffect(() => {
    const localArr = localStorage.getItem("charactersArr")
    if(localArr !== null){
      const charactersArr = JSON.parse(localArr)
      setCharacters(charactersArr)
    }
    hasLoadedData(true)
  }, [])

  return loadedData ? (
    <Router>
      <Toaster position='top-center'/>
      <NavBar />
      <Routes>
        <Route exact path='/' element={
          <Home characters = {characters}/>
        }/>
        <Route path='/characters' element={
          <Characters 
            characters = {characters}
            currentCharacter = {currentCharacter}
            setCurrentCharacter = {setCurrentCharacter}
          />
        }/>
        <Route path='/sheet' element={
          <Sheet 
            characters = {characters} 
            setCharacters = {setCharacters}
            currentCharacter = {currentCharacter}
            setCurrentCharacter = {setCurrentCharacter}
          />
        }/>
        <Route path='/gamemaster' element={
          <GameMaster />
        }/>
      </Routes>
    </Router>
  ) : ""

}

export default App;
