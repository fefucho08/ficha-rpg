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
        const updatedCharacters = characters.map((character) => {
            if (character.id === currentCharacter) {
                return {
                    ...character,
                    items: items,
                };
            }
            return character;
        });
        setCharacters(updatedCharacters);
    }, [items, characters, currentCharacter, setCharacters]);

    useEffect(() => {
        const updatedCharacters = characters.map((character) => {
            if (character.id === currentCharacter) {
                return {
                    ...character,
                    items: items,
                    weapons: weapons,
                };
            }
            return character;
        });
        setCharacters(updatedCharacters);
    }, [weapons, characters, currentCharacter, items, setCharacters]);

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
