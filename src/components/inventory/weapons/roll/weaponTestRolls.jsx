import { useEffect, useState } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

export default function TestWeapon({test, isTesting, name}){

    const [valid, isValid] = useState(false)
    const [multiplier, setMultiplier] = useState(0)
    const [dice, setDice] = useState(0)
    const [bonus, setBonus] = useState(0)

    useEffect(() => {
        if(test.includes("d")){
            const numbers = test.split("d");
            setMultiplier(parseInt(numbers[0]))
            const diceAndBonus = numbers[1];
    
            if(diceAndBonus.includes("+")){
                const splitted = diceAndBonus.split("+");
                setDice(parseInt(splitted[0]));
                setBonus(parseInt(splitted[1]));
            }
            else{
                setDice(parseInt(diceAndBonus))
            }

            if(isNaN(multiplier) || isNaN(dice) || isNaN(bonus)){
                alert("Valores inválidos")
                isValid(false)
                isTesting(false)
            } else{
                isValid(true)
            }
                    
        }else{
            alert("Digite da maneira correta")
            isTesting(false)
        }
    }, [bonus, dice, multiplier, test, isTesting])

    return (valid) ? 
        (<TestWeaponRoll
        name={name}
        multiplier={multiplier}
        dice={dice}
        bonus={bonus}
        isTesting={isTesting}
        />) : ""
}


function TestWeaponRoll({name, multiplier, dice, bonus, isTesting}){
    
    let rolls = [];

    for(let i = 0; i < multiplier; i++){
        let newRoll = Math.floor(Math.random()*dice) + 1
        rolls.push(newRoll)
    }

    let result = Math.max(...rolls) + bonus;

    return (
        <div className="popUp testWeapon">
            <div>
                <span onClick={() => isTesting(false)}>
                    <FaRegTimesCircle/>
                </span>
                <h2>Teste de {name}</h2>
                <h3>{result}</h3>
                <p>Seus resultados foram: {rolls.join(", ")}</p>
            </div>
            <div className='options'>
                <button>Rolar Dano</button>
                <button>Rolar Crítico</button>
            </div>
        </div>
    )
}