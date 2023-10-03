import { useEffect, useState } from "react"
import Items from "./items/items"
import Weapons from "./weapons/weapons"
import './inventory.css'

export default function Inventory(props){

    const {currentCharacter, change, characters} = props

    const [items, setItems] = useState(characters[currentCharacter].items)
    const [weapons, setWeapons] = useState(characters[currentCharacter].weapons);

    useEffect(() => {
        change("items", items, currentCharacter);
    }, [items])

    useEffect(() =>{
        setItems(characters[currentCharacter].items);
        setWeapons(characters[currentCharacter].weapons);
    }, [currentCharacter])

    useEffect(() => {
        change("weapons", weapons, currentCharacter);
    }, [weapons])

    return(
        <div className="maxContainer">
            <Items
                characters = {characters}
                currentCharacter = {currentCharacter}
                items = {items}
                setItems = {setItems}
                weapons = {weapons}
                setWeapons = {setWeapons}
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