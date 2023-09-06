import Items from "./items/items"
import Weapons from "./weapons/weapons"
import './inventory.css'

export default function Inventory(props){
    return(
        <div style={{marginTop: '40px', display: 'flex', justifyContent: 'space-between'}}>
            <Items
            str = {props.str}
            />
            <Weapons/>
        </div>
    )
}