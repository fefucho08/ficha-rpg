import Items from "./items/items"
import './inventory.css'

export default function Inventory(){
    return(
        <div style={{marginTop: '40px', display: 'flex', justifyContent: 'space-between'}}>
            <Items/>
        </div>
    )
}