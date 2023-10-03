import { useState } from 'react'
import Bar from './bar/bar'
import PopUpMax from './changeMax/changeMax';
import './stats.css'

export default function Stats(props){
    const {currentCharacter, change, characters} = props
    const [popUp, setPopUp] = useState(false);

    const [vidaMax, setVidaMax] = useState(10);
    const [sanMax, setSanMax] = useState(10);
    const [peMax, setPeMax] = useState(10);

    const variables = {
        Vida: vidaMax,
        San: sanMax,
        Pe: peMax,
    }
    
    const methods = {
        Vida: setVidaMax,
        San: setSanMax,
        Pe: setPeMax
    };

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
            className='editButton'
            onClick={() =>{
                setPopUp(true);
            }}
            >Editar</button>
            <PopUpMax trigger={popUp} setTrigger={setPopUp} setVars={methods} variables={variables}/>
        </div>
    )
}