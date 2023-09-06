import { useState } from "react"
import '../inventory.css'
import { FaRegTimesCircle } from "react-icons/fa"
import {AiOutlineWarning} from "react-icons/ai"

function FillWarning(props){

    setTimeout(() => {
        props.checkIsEmpty(false)
    }, 3000)

    return(
        <div className="fillWarning">
            <AiOutlineWarning/>
            <p>É necessário escrever o nome do item!</p>
        </div>
    )
    
}

export default function AddItem({setTrigger, addItem}) {
    
    const [inputItem, setInputItem] = useState("")
    const [spaceItem, setSpaceItem] = useState(0)
    
    const [isEmpty, checkIsEmpty] = useState(false)

    return (

        <div className="popUp addItem">

            <span onClick={() => setTrigger(false)}>
                    <FaRegTimesCircle/>
            </span>

            <h1>Adicionar Item</h1>
            {isEmpty && <FillWarning checkIsEmpty={checkIsEmpty}/>}
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
                        checkIsEmpty(true)
                }}>
                Salvar
                </button>
            </div>
            
        </div>
        
        
    )
}