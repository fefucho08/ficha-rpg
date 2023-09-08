import { useState } from 'react'
import AddWeapons from './addWeapons';
import TestWeapon from './roll/weaponTestRolls';
import {FaTrashAlt} from 'react-icons/fa'
import '../inventory.css'

function SingularWeapon({name, test, damage, range, isTesting, setTest, setTestName, deleteWeapon, id}){


    const rollTest = () => {
        setTestName(name)
        setTest(test)
        isTesting(true)
    }
    
    return(
        <div className='weapon'>
            <input value={name} readOnly/>
            <input value={test} readOnly className='testInput' onClick={() => rollTest(test)}/>
            <input value={damage} readOnly className='damageInput'/>
            <input value={range} readOnly/>
            <span onClick={() => deleteWeapon(id)}>
                <FaTrashAlt/>
            </span>
        </div>
    )
}

export default function Weapons(){

    const [weapons, setWeapons] = useState([]);

    const [adding, isAdding] = useState(false);
    
    const [testing, isTesting] = useState(false)

    const [test, setTest] = useState("")

    const [testName, setTestName] = useState("")

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

    const deleteWeapon = (id) => {
        
        if(window.confirm("Deseja remover essa arma?")){
            const newWeapons = weapons.filter((weapon) => weapon.id !== id);

            setWeapons(newWeapons);
        }
    }

    return(
        <div className="containerInv">
            <div className='invHeader'>
                <h2>Armas</h2>
                <button onClick={() => isAdding(true)}>+</button>
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
                name = {weapon.weapon}
                test = {weapon.test}
                damage = {weapon.damage}
                range = {weapon.range}
                space = {weapon.space}
                isTesting = {isTesting}
                setTest = {setTest}
                setTestName = {setTestName}
                deleteWeapon = {deleteWeapon}
                id = {weapon.id}
                />
            ))}
            

            {adding && <AddWeapons addWeapon={addWeapon} isAdding={isAdding}/>}
            {testing && <TestWeapon
            isTesting={isTesting}
            name = {testName}
            test={test}
            />}
        </div>
    )
}