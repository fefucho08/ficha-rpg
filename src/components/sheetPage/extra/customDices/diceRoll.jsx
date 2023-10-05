import { useEffect, useState } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import validator from '../../../../validator'
import '../extra.css'

export default function CustomDiceRoll(props){
    const {value, name, isDamage, isRolling} = props
    
    const [valid, isValid] = useState(false)

    const validation = validator(value)

    useEffect(() => {
        if(!validation){
            isValid(false)
            isRolling(false)
        }
        else
            isValid(true)
    }, [validation, isRolling])

    let rolls = [];

    for(let i = 0; i < validation.multiplier; i++){
        let newRoll = Math.floor(Math.random()*validation.dice)+1
        rolls.push(newRoll)
    }

    let result = 0;

    if(isDamage){
        for(let i = 0; i < rolls.length; i++)
        result += rolls[i];
    } else {
        result = Math.max(...rolls);
    }

    result += validation.bonus

    return valid ? (
        <div className="popUp">
            <span onClick={() => isRolling(false)}>
                <FaRegTimesCircle/>
            </span>
            <h2>Rolagem de {name}</h2>
            <h3>{result}</h3>
            <p>Os resultados foram: {rolls.join(", ")}</p>
        </div>
    ) : ""
}