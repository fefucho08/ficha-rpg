import { useState } from 'react'
import {BiSend} from 'react-icons/bi'
import D20 from '../../../imagens/d20.png'
import validator from '../../../validator'
import '../extra.css'

function SingularDice(props){

    const {name, symbol, value} = props

    const rollDice = () => {
        alert(value)
    }

    return(
        <div className='savedDice' onClick={() => rollDice()}>
            <img src={symbol} alt='Dice Symbol'/>
            <p>{name}</p>
        </div>
    )
}

export default function CustomDices(){
    const [savedDices, setSavedDices] = useState([]);
    const [fastDice, setFastDice] = useState("")

    const addNewDice = () => {
        
        const newDice = {
            name: "Mais um",
            symbol: D20,
            value: "4d6"
        }
        setSavedDices([...savedDices, newDice])
    }
    return(
        <div className="extraInnerContainer">
            <div className="customDicesHeader">
                <h2>Dados Customizados</h2>
                <button className='addButton' onClick={() => addNewDice()}>+</button>
            </div>
            <div className="savedCustomDices">
                {savedDices.map((dice) => (
                    <SingularDice 
                        name={dice.name}
                        symbol={dice.symbol}
                        value={dice.value}
                    />
                ))}
            </div>
            <div className="fastDice">
                <input 
                    placeholder='Dado rápido (Ex: 2d20+5)' 
                    type='text' 
                    value={fastDice} 
                    onChange={(e) => setFastDice(e.target.value)}
                />
                <button>
                    <BiSend/>
                </button>
            </div>
        </div>
    )
}