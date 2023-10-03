import { useEffect, useState } from 'react'
import {BiSend} from 'react-icons/bi'
import D4 from '../../../imagens/d4.png'
import D6 from '../../../imagens/d6.png'
import D8 from '../../../imagens/d8.png'
import D10 from '../../../imagens/d10.png'
import D12 from '../../../imagens/d12.png'
import D20 from '../../../imagens/d20.png'
import CustomDiceRoll from './diceRoll'
import AddNewDice from './addDice'
import RemoveDices from './removeDice'
import '../extra.css'

function SingularDice(props){

    const {name, symbol, value, isDamage, isRolling, setRollName, setRollValue, setIsDamage} = props

    var diceSymbol;

    switch(symbol){
        case "D4":
            diceSymbol = D4;
            break;
        case "D6":
            diceSymbol = D6;
            break;
        case "D8":
            diceSymbol = D8;
            break;
        case "D10":
            diceSymbol = D10;
            break;
        case "D12":
            diceSymbol = D12;
            break;
        case "D20":
            diceSymbol = D20;
            break;
        default:
            break;
    }

    const rollDice = () => {
        setRollName(name)
        setRollValue(value)
        setIsDamage(isDamage)
        isRolling(true)
    }

    return(
        <div className='savedDice' onClick={() => rollDice()}>
            <img src={diceSymbol} alt='Dice Symbol'/>
            <p>{name}</p>
        </div>
    )
}

export default function CustomDices(props){

    const {currentCharacter, change, characters} = props

    const [savedDices, setSavedDices] = useState(characters[currentCharacter].customDices);
    const [fastDice, setFastDice] = useState("")

    const [rolling, isRolling] = useState(false)
    const [adding, isAdding] = useState(false)
    const [deleting, isDeletingDices] = useState(false)

    const [rollValue, setRollValue] = useState("")
    const [rollName, setRollName] = useState("")
    const [isDamage, setIsDamage] = useState(false)

    const rollFastDice = () => {
        setRollName("Dado Rápido")
        setRollValue(fastDice)
        isRolling(true)
        setFastDice("")
    }
    
    useEffect(() => {
        change("customDices", savedDices, currentCharacter)
    }, [savedDices])

    useEffect(() => {
        setSavedDices(characters[currentCharacter].customDices)
    }, [currentCharacter])

    return(
        <>
            <div className="extraInnerContainer">
                <div className="customDicesHeader">
                    <h2>Dados Personalizados</h2>
                    <button className='addButton' onClick={() => isAdding(true)}>+</button>
                    <div className="removeButton" onClick={() => isDeletingDices(true)}>-</div>
                </div>
                <div className="savedCustomDices">
                    {savedDices.map((dice) => (
                        <SingularDice 
                            name={dice.name}
                            symbol={dice.symbol}
                            value={dice.value}
                            isDamage={dice.isDamage}
                            setRollValue={setRollValue}
                            isRolling={isRolling}
                            setRollName={setRollName}
                            setIsDamage={setIsDamage}
                            key={dice.id}
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
                    <button onClick={() => rollFastDice()}>
                        <BiSend/>
                    </button>
                </div>
            </div>
            {rolling && 
                <CustomDiceRoll
                    value = {rollValue}
                    name = {rollName}
                    isDamage = {isDamage}
                    isRolling = {isRolling}
                />
            }
            {adding &&
                <AddNewDice
                    savedDices = {savedDices}
                    setSavedDices = {setSavedDices}
                    isAdding = {isAdding}
                />
            }
            {deleting && 
                <RemoveDices
                    savedDices = {savedDices}
                    setSavedDices = {setSavedDices}
                    isDeletingDices = {isDeletingDices}
                />
            }
        </>
    )
}