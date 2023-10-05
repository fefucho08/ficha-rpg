import { useState } from 'react'
import Bar from './bar/bar'
import PopUpMax from './changeMax/changeMax';
import './stats.css'

export default function Stats(props){
    const {currentCharacter, change, characters} = props
    const [popUp, setPopUp] = useState(false);

    const variables = {
        Vida: characters[currentCharacter].hpMax,
        San: characters[currentCharacter].sanMax,
        Pe: characters[currentCharacter].peMax,
    }

    return(
        <div className="box">
            <Bar
                max={variables.Vida}
                tipo='PV'
                attribute="hp"
                currentCharacter = {currentCharacter}
                change = {change}
                characters = {characters}
            />
            <Bar
                max={variables.San}
                tipo='San'
                attribute="san"
                currentCharacter = {currentCharacter}
                change = {change}
                characters = {characters}
            />
            <Bar
                max={variables.Pe}
                tipo='PE'
                attribute="pe"
                currentCharacter = {currentCharacter}
                change = {change}
                characters = {characters}
            />
            <button
            className='editButton'
            onClick={() =>{
                setPopUp(true);
            }}
            >Editar</button>
            <PopUpMax 
                trigger={popUp} 
                setTrigger={setPopUp} 
                variables={variables}
                currentCharacter = {currentCharacter}
                change = {change}
                characters = {characters}
            />
        </div>
    )
}