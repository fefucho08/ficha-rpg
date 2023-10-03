import { useEffect, useState } from "react"
import Items from "./items/items"
import Weapons from "./weapons/weapons"
import './inventory.css'

export default function Inventory(props){

    const {currentCharacter, change, characters, setCharacters} = props

    const [items, setItems] = useState(characters[currentCharacter].items)
    const [weapons, setWeapons] = useState(characters[currentCharacter].weapons);


    useEffect(() => {
        // Atualize o array de objetos characters com base no estado local items
        const updatedCharacters = characters.map((character) => {
            if (character.id === currentCharacter) {
                return {
                    ...character,
                    items: items,
                };
            }
            return character;
        });
    
        // Atualize o estado global characters com o array atualizado
        setCharacters(updatedCharacters);
    }, [items]);
    


    useEffect(() =>{
        setItems(characters[currentCharacter].items);
        setWeapons(characters[currentCharacter].weapons);
    }, [currentCharacter])

    return(
        <div className="maxContainer">
            <Items
                characters = {characters}
                currentCharacter = {currentCharacter}
                items = {items}
                setItems = {setItems}
                weapons = {weapons}
                setWeapons = {setWeapons}
                change = {change}
                setCharacters = {setCharacters}
            />
            <Weapons
                items = {items}
                setItems = {setItems}
                weapons = {weapons}
                setWeapons = {setWeapons}
            />
        </div>
    )
}