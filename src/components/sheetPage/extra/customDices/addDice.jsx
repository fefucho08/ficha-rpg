import { useState } from "react"
import { FaRegTimesCircle } from "react-icons/fa"
import toast from "react-hot-toast"

export default function AddNewDice(props){
    const {savedDices, setSavedDices, isAdding} = props

    const [diceName, setDiceName] = useState("")
    const [diceValue, setDiceValue] = useState("")
    const [diceSymbol, setDiceSymbol] = useState("D20")
    const [isDamage, changeIsDamage] = useState(false)

    const addDice = (name, value, symbol, isDamage) => {
        
        if(value) {
            if(name === "")
                name = value
    
            const newDice = {
                name: name,
                value: value,
                symbol: symbol,
                isDamage: isDamage,
                id: Math.random(),
            }

            setSavedDices([...savedDices, newDice])
            isAdding(false)
        }
        else
            toast.error("Preencha o campo de dados")
    }

    return (
        <div className="popUp addDice">
            <span onClick={() => isAdding(false)}>
                <FaRegTimesCircle/>
            </span>
            <h2>Adicionar Dado Personalizado</h2>
            <label htmlFor="diceSymbol">Símbolo</label>
            <select id="diceSymbol" value={diceSymbol} onChange={(e) => setDiceSymbol(e.target.value)}>
                <option value="D4">D4</option>
                <option value="D6">D6</option>
                <option value="D8">D8</option>
                <option value="D10">D10</option>
                <option value="D12">D12</option>
                <option value="D20">D20</option>
            </select>
            <label htmlFor="diceName">Nome(Opcional)</label>
            <input
                maxLength={15}
                type="text"
                id="diceName"
                value={diceName}
                onChange={(e) => setDiceName(e.target.value)}
            />
            <label htmlFor="diceValue">Dados</label>
            <input
                id="diceValue"
                type="text"
                value={diceValue}
                onChange={(e) => setDiceValue(e.target.value)}
            />
            <label className="switch">
                <input
                    id="isDamage" 
                    type="checkbox" 
                    value={isDamage}
                    onChange={() => changeIsDamage(!isDamage)}
                />
                <span className="slider"/>
            </label>
            <label htmlFor="isDamage" style={{fontSize: 'smaller'}}>Rolar como dano (soma todos os dados)</label>
            <button
                onClick={() => addDice(diceName, diceValue, diceSymbol, isDamage)}
            >Salvar</button>
        </div>
    )
}