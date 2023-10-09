import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './layout/navbar';
import LoginPage from './pages/login';
import Home from './pages/home';
import Characters from './pages/characters';
import Sheet from './pages/sheet';
import GameMaster from './pages/gm';
import LoginRoute from './PrivateRoute/loginRoute';
import PrivateRoute from './PrivateRoute/privateRoute';

function App() {

  const [characters, setCharacters] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const [loadedData, hasLoadedData] = useState(false)
  const [userData, setUserData] = useState({})

  const getUserData = async (id) => {
    try {
      const response = await fetch("https://servidorrpg.onrender.com/users/" + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do usuário');
      }
      const data = await response.json();
      setCharacters(data.characters);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (userId !== null) {
      getUserData(userId).then(() => {
        console.log(characters);
        hasLoadedData(true);
      });
    } else {
      hasLoadedData(true);
    }
  }, [])

  return loadedData ? (
    <Router>
      <Toaster position='top-center'/>
      <NavBar />
      <Routes>
        <Route exact path='/' element={
          <Home characters = {characters}/>
        }/>
        <Route path='/login' element={
          <LoginRoute>
            <LoginPage/>
          </LoginRoute>
        }/>
        <Route path='/characters' element={
          <PrivateRoute>
            <Characters 
              characters = {characters}
              currentCharacter = {currentCharacter}
              setCurrentCharacter = {setCurrentCharacter}
            />
          </PrivateRoute>
        }/>
        <Route path='/sheet' element={
          <PrivateRoute>
            <Sheet 
              characters = {characters} 
              setCharacters = {setCharacters}
              currentCharacter = {currentCharacter}
              setCurrentCharacter = {setCurrentCharacter}
            />
          </PrivateRoute>
        }/>
        <Route path='/gamemaster' element={
          <PrivateRoute>
            <GameMaster />
          </PrivateRoute>
        }/>
      </Routes>
    </Router>
  ) : ""

}

export default App;
