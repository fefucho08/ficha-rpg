import { useContext, useEffect, useState, useCallback } from "react";
import Header from "../components/sheetPage/header/header";
import Info from "../components/sheetPage/info/info";
import Tests from "../components/sheetPage/tests/tests";
import Inventory from "../components/sheetPage/inventory/inventory";
import Rituals from "../components/sheetPage/rituals/rituals";
import Extra from "../components/sheetPage/extra/extra";
import CharactersNavigation from "../components/sheetPage/navigation/navigation";
import "./sheet.css";
import character from "../character.json";
import { ChangeContext, CharactersContext } from "../contexts/contexts";

export default function Sheet() {
    const { characters, setCharacters } = useContext(CharactersContext);

    const [loadedData, hasLoadedData] = useState(false);

    useEffect(() => {
        const storedCharacters = localStorage.getItem("charactersArr");
        if (storedCharacters) {
            setCharacters(JSON.parse(storedCharacters));
        } else {
            const inicialCharacter = JSON.parse(JSON.stringify(character));
            setCharacters([inicialCharacter]);
        }
        hasLoadedData(true);
    }, [setCharacters]);

    useEffect(() => {
        if (characters.length > 0) {
            const timeout = setTimeout(() => {
                localStorage.setItem(
                    "charactersArr",
                    JSON.stringify(characters)
                );
            }, 500); // Debouncing de 500ms
            return () => clearTimeout(timeout);
        }
    }, [characters]);

    const change = useCallback(
        (param, content, id) => {
            setCharacters((prevCharacters) =>
                prevCharacters.map((character) =>
                    character.id === id
                        ? { ...character, [param]: content }
                        : character
                )
            );
        },
        [setCharacters]
    );

    return loadedData ? (
        <div className="sheet">
            <CharactersNavigation />
            <div className="sheetContent">
                <Header />
                <ChangeContext.Provider value={change}>
                    <Info />
                    <Tests />
                    <Inventory />
                    <Rituals />
                    <Extra />
                </ChangeContext.Provider>
            </div>
        </div>
    ) : (
        ""
    );
}
