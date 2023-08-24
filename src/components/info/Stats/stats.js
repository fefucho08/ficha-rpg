import { useState } from 'react'
import Bar from './bar/bar'
import PopUpMax from './changeMax/changeMax';
import './stats.css'

export default function Stats(){
    
    const [vidaMax, setVidaMax] = useState(10);
    const [sanMax, setSanMax] = useState(10);
    const [peMax, setPeMax] = useState(10);

    let popUp = false;

    function changePop(){
        popUp = true;
        if(popUp){
            return (
                <PopUpMax/>
            )
        }
        else{

        }
    }

    return(
        <div className="box">
            <Bar
            max={vidaMax}
            tipo='PV'
            />
            <Bar
            max={sanMax}
            tipo='San'
            />
            <Bar
            max={peMax}
            tipo='PE'
            />
            <button
            onClick={changePop}
            >Editar</button>
        </div>
    )
}