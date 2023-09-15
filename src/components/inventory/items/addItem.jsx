import { useState } from "react"
import '../inventory.css'
import { FaRegTimesCircle } from "react-icons/fa"
import toast from "react-hot-toast"


export default function AddItem({setTrigger, addItem}) {
    
    const [inputItem, setInputItem] = useState("")
    const [spaceItem, setSpaceItem] = useState(0)
    

    return (

        <div className="popUp addItem">

            <span onClick={() => setTrigger(false)}>
                    <FaRegTimesCircle/>
            </span>

            <h1>Adicionar Item</h1>
            <div>
                <input
                required
                placeholder="Item"
                type="text"
                value={inputItem}
                onChange={(e) => setInputItem(e.target.value)}
                />
                <input
                placeholder="Espaço"
                type="number"
                value={spaceItem}
                onChange={(e) => setSpaceItem(e.target.value)}
                />
                <button
                type="submit"
                onClick={() => {
                    if(inputItem !== ""){
                        addItem(inputItem, spaceItem)
                        setTrigger(false)
                    }
                    else
                        toast.error("É necessário escrever o nome do item!")
                }}>
                Salvar
                </button>
            </div>
            
        </div>
        
        
    )
}