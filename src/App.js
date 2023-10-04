import './App.css';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './layout/navbar';
import Home from './pages/home';
import Sheet from './pages/sheet';

function App() {

  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(0)
  
  return (
    <Router>
      <Toaster position='top-center'/>
      <NavBar />
      <Routes>
        <Route exact path='/' element={
          <Home />
        }/>
        <Route path='/characters' element={
          <Sheet 
            characters = {characters} 
            setCharacters = {setCharacters}
            currentCharacter = {currentCharacter}
            setCurrentCharacter = {setCurrentCharacter}/>
        }/>
      </Routes>
    </Router>
  )

}

export default App;
