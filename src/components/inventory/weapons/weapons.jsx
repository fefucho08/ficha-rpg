import { useState } from 'react'
import AddWeapons from './addWeapons';
import '../inventory.css'

function SingularWeapon({name, test, damage, range}){

    const attackWeapon = (test) => {
        if(test.includes("d")){
            const numbers = test.split("d");
            const multiplier = parseInt(numbers[0]);
            const dice = parseInt(numbers[1]);
    
            var rolls = []
            
    
            if(isNaN(multiplier) || isNaN(dice))
                alert("Inválido");
            else {
                for(let i = 0; i < multiplier; i++){
                    let newRoll = Math.floor(Math.random() * dice) + 1
                    rolls.push(newRoll)
                }
                const result = Math.max(...rolls);
                alert(rolls)
                alert(result)
            }
        }else{
            alert("Digite da maneira correta!")
        }
        
        
    }
    
    return(
        <div className='weapon'>
            <input value={name} readOnly/>
            <input value={test} readOnly className='testInput' onClick={() => attackWeapon(test)}/>
            <input value={damage} readOnly className='damageInput'/>
            <input value={range} readOnly/>
        </div>
    )
}

export default function Weapons(){

    const [weapons, setWeapons] = useState([]);

    const [trigger, setTrigger] = useState(false);

    const addWeapon = (weapon, space, test, damage, range, critical) => {

        const newWeapon = {
            id: Math.random(),
            weapon: weapon,
            space: space,
            test: test,
            damage: damage,
            range: range,
            critical: critical
        }

        setWeapons([...weapons, newWeapon])

    }

    return(
        <div className="containerInv">
            <div className='invHeader'>
                <h2>Armas</h2>
                <button onClick={() => setTrigger(true)}>+</button>
            </div>
            
            <header className='weaponsHeader'>
                <input value="Nome" readOnly/>
                <input value="Teste" readOnly/>
                <input value="Dano" readOnly/>
                <input value="Alcance" readOnly/>
            </header>

            {weapons.map((weapon) => (
                <SingularWeapon
                key = {weapon.id}
                name = {weapon.weapon}
                test = {weapon.test}
                damage = {weapon.damage}
                range = {weapon.range}
                space = {weapon.space}
                />
            ))}
            

            {trigger && <AddWeapons addWeapon={addWeapon} setTrigger={setTrigger}/>}
        </div>
    )
}