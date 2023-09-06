import { useState } from 'react'
import '../inventory.css'

export default function Weapons(){

    const [weapons, setWeapons] = useState([]);


    return(
        <div className="containerInv">
            <div className='invHeader'>
                <h2>Armas</h2>
                <button>+</button>
            </div>

            
        </div>
    )
}