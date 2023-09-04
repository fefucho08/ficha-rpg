import { useState } from "react"

export default function AddItem({setTrigger, addItem}) {
    
    const [inputItem, setInputItem] = useState("")
    const [spaceItem, setSpaceItem] = useState(0)
    
    return (
        <div className="popUp">
            <input
            style={{color:"black"}}
            type="text"
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
            />
            <input
            style={{color:"black"}}
            type="number"
            value={spaceItem}
            onChange={(e) => setSpaceItem(e.target.value)}
            />
            <button
            onClick={() => {
                addItem(inputItem, spaceItem)
                setTrigger(false)
            }}
            >Fechar</button>
        </div>
        
        
    )
}