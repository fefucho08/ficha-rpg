import { useEffect, useState } from "react"
import AddItem from "./addItem"
import {FaTrashAlt} from 'react-icons/fa'

function SingularItem({name, space, deleteItem, id}){
    
    return(
        <div className="item">
            <p>{name}</p> 
            <div className="right">
                <input
                type="number"
                value={space}
                readOnly
                className="space"
                />

                <button onClick={() => deleteItem(id)}>
                    <FaTrashAlt
                    style={{clear: "both"}}
                    /> 
                </button>
            </div>
        </div>
    )
}


export default function Items({items, setItems, weapons, setWeapons, str}){


    const [trigger, setTrigger] = useState(false)

    const [space, setSpaceUsed] = useState(0)
    const [spaceMax, setSpaceMax] = useState((str)*5)

    useEffect(() => {
        setSpaceMax((str > 0) ? (str)*5 : 2)
    }, [str])

    useEffect(() =>{
        const sum = items.reduce((total, item) => total +  parseInt(item.space), 0);
        setSpaceUsed(sum);
    }, [items])


    const addItem = (item, space) => {
        
        const newItem = {
            id: Math.random(),
            item: item,
            space: space
        }

        setItems([...items, newItem])
    }

    const deleteItem = (id) => {
        
        if(window.confirm("Deseja mesmo remover esse item?")){
            const newInv = items.filter((item) => item.id !== id);
            const newWeapons = weapons.filter((weapon) => weapon.id !== id)

            setItems(newInv);
            setWeapons(newWeapons)
        }
        
    }

    return (
        <div className="containerInv">

            <div className="invHeader">
                <h2>Inventário</h2>
                <p style={{color: "white"}}>{space}/{spaceMax}</p>
                <button
                onClick={() => setTrigger(true)}
                >+</button>
            </div>
            
            {items.map((item) => (
                <SingularItem
                key={item.id}
                id={item.id}
                name={item.item}
                space={item.space}
                deleteItem={deleteItem}
                />
            ))}

            {trigger && <AddItem
            setTrigger = {setTrigger}
            addItem = {addItem}
            />}
        </div>
    )
}