import { useEffect, useState } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';


const validator = (test) => {


    let multiplier, dice;
    let bonus = 0;

    if(test.includes("d")){
        const numbers = test.split("d");
        multiplier = parseInt(numbers[0])
        const diceAndBonus = numbers[1];

        if(diceAndBonus.includes("+")){
            const splitted = diceAndBonus.split("+");
            dice = parseInt(splitted[0]);
            bonus = parseInt(splitted[1]);
        }
        else{
            dice = (parseInt(diceAndBonus))
        }

        if(isNaN(multiplier) || isNaN(dice) || isNaN(bonus)){
            alert("Valores inválidos")
            return false
        } else{
            const testInformation = {
                multiplier: multiplier,
                dice: dice,
                bonus: bonus,
            }

            return testInformation
        }
                
    }else{
        alert("Digite da maneira correta")
        return false
    }
}

export default function TestWeapon({test, isTesting, name, damage, critical, setTestName, setDamage, isRollingDamage}){

    const [valid, isValid] = useState(true)

    const validation = validator(test);

    useEffect(() => {
        if(!validation){
            isValid(false)
            isTesting(false)
        }
    }, [isTesting, validation])

    return (valid) ? 
        (<TestWeaponRoll
        name={name}
        multiplier={validation.multiplier}
        dice={validation.dice}
        bonus={validation.bonus}
        isTesting={isTesting}
        damage={damage}
        critical={critical}
        setTestName={setTestName}
        setDamage={setDamage}
        isRollingDamage={isRollingDamage}
        />) : ""
}


function TestWeaponRoll({name, multiplier, dice, bonus, isTesting, damage, critical, isRollingDamage, setTestName, setDamage}){

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
                <button onClick={() => {
                setTestName(name)
                setDamage(damage)
                isTesting(false)
                isRollingDamage(true)}}
                >Rolar Dano</button>
                <button onClick={() => {
                setTestName(name)
                setDamage(critical)
                isTesting(false)
                isRollingDamage(true)
                }}>Rolar Crítico</button>
            </div>

        </div>
    )
}

export function DamageRoll({name, damage, isRollingDamage}){

    const [valid, isValid] = useState(false)

    const validation = validator(damage);

    useEffect(() => {
        if(!validation){
            isValid(false)
        } else
            isValid(true)
    }, [validation])

    let rolls = [];

    for(let i = 0; i < validation.multiplier; i++){
        let newRoll = Math.floor(Math.random()*validation.dice)+1
        rolls.push(newRoll)
    }

    let result = 0;

    for(let i = 0; i < rolls.length; i++)
        result += rolls[i]

    result += validation.bonus

    return valid ? (
        <div className="popUp">
            <span onClick={() => isRollingDamage(false)}>
                <FaRegTimesCircle/>
            </span>
            <h2>Rolagem de Dano de {name}</h2>
            <h3>{result}</h3>
            <p>Seus resultados foram: {rolls.join(", ")}</p>
        </div>
    ) : ""
}