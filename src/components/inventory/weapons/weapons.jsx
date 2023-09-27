import { useState } from 'react'
import AddWeapons from './addWeapons';
import TestWeapon from './roll/weaponTestRolls';
import { DamageRoll } from './roll/weaponTestRolls';
import {FaTrashAlt} from 'react-icons/fa'
import '../inventory.css'

function SingularWeapon({name, test, damage, critical, range, isTesting, isRollingDamage, setTest, setTestName, setDamage, setCritical, deleteWeapon, id}){


    const rollTest = () => {
        setTestName(name)
        setTest(test)
        setDamage(damage)
        setCritical(critical)
        isTesting(true)
    }
    
    const rollDamage = () => {
        setTestName(name)
        setDamage(damage)
        isRollingDamage(true)
    }

    return(
        <div className='weapon'>
            <input value={name} readOnly/>
            <input value={test} readOnly className='testInput' onClick={() => rollTest()}/>
            <input value={damage} readOnly className='damageInput' onClick={() => rollDamage()}/>
            <input value={range} readOnly/>
            <span onClick={() => deleteWeapon(id)}>
                <FaTrashAlt/>
            </span>
        </div>
    )
}

export default function Weapons({items, setItems, weapons, setWeapons}){


    const [adding, isAdding] = useState(false);
    
    const [testing, isTesting] = useState(false)

    const [rollingDamage, isRollingDamage] = useState(false)

    const [test, setTest] = useState("")

    const [testName, setTestName] = useState("")

    const [damage, setDamage] = useState("")

    const [critical, setCritical] = useState("")

    const addWeapon = (weapon, space, test, damage, range, critical) => {

        const newWeapon = {
            id: Math.random(),
            item: weapon,
            space: space,
            test: test,
            damage: damage,
            range: range,
            critical: critical
        }

        setWeapons([...weapons, newWeapon])
        setItems([...items, newWeapon])

    }

    const deleteWeapon = (id) => {
        
        if(window.confirm("Deseja remover essa arma?")){
            const newWeapons = weapons.filter((weapon) => weapon.id !== id);
            const newItems = items.filter((item) => item.id !== id)

            setWeapons(newWeapons);
            setItems(newItems);
        }
    }

    return(
        <div className="containerInv">
            <div className='invHeader'>
                <h2>Armas</h2>
                <button onClick={() => isAdding(true)} className='addButton'>+</button>
            </div>
            
            <header className='weaponsHeader'>
                <input value="Nome" readOnly/>
                <input value="Teste" readOnly/>
                <input value="Dano" readOnly/>
                <input value="Alcance" readOnly/>
                <input value="" readOnly/>
            </header>

            {weapons.map((weapon) => (
                <SingularWeapon
                key = {weapon.id}
                name = {weapon.item}
                test = {weapon.test}
                damage = {weapon.damage}
                range = {weapon.range}
                space = {weapon.space}
                critical = {weapon.critical}
                isTesting = {isTesting}
                isRollingDamage = {isRollingDamage}
                setTest = {setTest}
                setTestName = {setTestName}
                setDamage = {setDamage}
                setCritical = {setCritical}
                deleteWeapon = {deleteWeapon}
                id = {weapon.id}
                />
            ))}
            

            {adding && <AddWeapons addWeapon={addWeapon} isAdding={isAdding}/>}
            {testing && <TestWeapon
            isTesting={isTesting}
            name = {testName}
            test={test}
            damage={damage}
            critical={critical}
            isRollingDamage = {isRollingDamage}
            setTestName = {setTestName}
            setDamage = {setDamage}
            />}
            {rollingDamage && <DamageRoll
            isRollingDamage = {isRollingDamage}
            name={testName}
            damage={damage}
            />}
        </div>
    )
}