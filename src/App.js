import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./layout/navbar";
import Home from "./pages/home";
import Characters from "./pages/characters";
import Sheet from "./pages/sheet";
import GameMaster from "./pages/gm";
import { CharactersContext } from "./contexts/contexts";

function App() {
    const [characters, setCharacters] = useState([]);
    const [currentCharacter, setCurrentCharacter] = useState(0);
    const [loadedData, hasLoadedData] = useState(false);

    useEffect(() => {
        const localArr = localStorage.getItem("charactersArr");
        if (localArr !== null) {
            const charactersArr = JSON.parse(localArr);
            setCharacters(charactersArr);
        }
        hasLoadedData(true);
    }, []);

    return loadedData ? (
        <CharactersContext.Provider
            value={{
                characters,
                setCharacters,
                currentCharacter,
                setCurrentCharacter,
            }}
        >
            <Router>
                <Toaster position="top-center" />
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/sheet" element={<Sheet />} />
                    <Route path="/gamemaster" element={<GameMaster />} />
                </Routes>
            </Router>
        </CharactersContext.Provider>
    ) : (
        ""
    );
}

export default App;
