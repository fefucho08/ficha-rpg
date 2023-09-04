import { useState } from "react"
import AddItem from "./addItem"

function SingularItem({name, space}){
    return(
        <div className="item">
            {name} {space}
        </div>
    )
}


export default function Items(){

    const [trigger, setTrigger] = useState(false)

    const [space, setSpaceUsed] = useState(0)
    const [spaceMax, setSpaceMax] = useState(0)

    const [items, setItems] = useState([])
    

    const addItem = (item, space) => {
        
        const newItem = {
            id: Math.random(),
            item: item,
            space: space
        }

        setItems([...items, newItem])
    }

    return (
        <div className="containerInv">
            <h2>Itens</h2>
            <p style={{color: "white"}}>{space}/{spaceMax}</p>
            <button
            onClick={() => setTrigger(true)}
            >+</button>

            {items.map((item) => (
                <SingularItem
                key={item.id}
                name={item.item}
                space={item.space}
                />
            ))}

            {trigger && <AddItem
            setTrigger = {setTrigger}
            addItem = {addItem}
            />}
        </div>
    )
}