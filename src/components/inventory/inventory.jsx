import { useEffect, useState } from "react"
import Items from "./items/items"
import Weapons from "./weapons/weapons"
import './inventory.css'

export default function Inventory(props){

    const {currentCharacter, change, characters} = props

    const [items, setItems] = useState(characters[currentCharacter].items)
    const [weapons, setWeapons] = useState(characters[currentCharacter].weapons);


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