import { useState } from "react"
import Items from "./items/items"
import Weapons from "./weapons/weapons"
import './inventory.css'

export default function Inventory({str}){

    const [items, setItems] = useState([])
    const [weapons, setWeapons] = useState([]);

    return(
        <div className="maxContainer">
            <Items
            str = {str}
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