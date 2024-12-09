import { useContext, useEffect, useState } from "react";
import Items from "./items/items";
import Weapons from "./weapons/weapons";
import "./inventory.css";
import { CharactersContext } from "../../../contexts/contexts";

export default function Inventory() {
    const { currentCharacter, characters, setCharacters } =
        useContext(CharactersContext);

    const [items, setItems] = useState(characters[currentCharacter].items);
    const [weapons, setWeapons] = useState(
        characters[currentCharacter].weapons
    );

    useEffect(() => {
        if (
            characters[currentCharacter].items !== items ||
            characters[currentCharacter].weapons !== weapons
        ) {
            const updatedCharacter = {
                ...characters[currentCharacter],
                items,
                weapons,
            };

            const updatedCharacters = [...characters];
            updatedCharacters[currentCharacter] = updatedCharacter;

            setCharacters(updatedCharacters);
        }
    }, [items, weapons, currentCharacter, characters, setCharacters]);

    useEffect(() => {
        setItems(characters[currentCharacter].items);
        setWeapons(characters[currentCharacter].weapons);
    }, [currentCharacter, characters]);

    return (
        <div className="maxContainer">
            <Items
                items={items}
                setItems={setItems}
                weapons={weapons}
                setWeapons={setWeapons}
            />
            <Weapons
                items={items}
                setItems={setItems}
                weapons={weapons}
                setWeapons={setWeapons}
            />
        </div>
    );
}
