import './changeMax.css';
import { FaRegTimesCircle } from 'react-icons/fa';


function ChangeDefault({tipo, change, attribute, currentCharacter, characters}){


    return (
    <div className='changeDefault'>
        <h2>{tipo} Máx.</h2>
        <input
            className='inputMax'
            type='number'
            placeholder = {10}
            value={characters[currentCharacter][attribute]}
            onChange={(e) => change(attribute, e.target.value, currentCharacter)}
        />
    </div>
    
    )
}


export default function PopUpMax({trigger, setTrigger, variables, currentCharacter, change, characters}){
    return (trigger) ? (
        <div className="popUp">
            <span onClick={() =>{
                if(variables.Vida === '')
                    change("hpMax", 10, currentCharacter);
                
                if(variables.San === '')
                    change("sanMax", 10, currentCharacter);

                if(variables.Pe === '')
                    change("peMax", 10, currentCharacter);

                setTrigger(false);
            }}>
                <FaRegTimesCircle/>
            </span>
            
            <h1 style={{color:'black'}}>Editar Variáveis</h1>
            <ChangeDefault 
                tipo = 'Vida'
                attribute="hpMax"  
                change={change}
                characters={characters}
                currentCharacter={currentCharacter}
            />

            <ChangeDefault
                tipo='San'
                attribute="sanMax"
                change={change}
                characters={characters}
                currentCharacter={currentCharacter}
            />

            <ChangeDefault
                tipo='PE'
                attribute="peMax"
                change={change}
                characters={characters}
                currentCharacter={currentCharacter}
            />
        </div>
    ) : "";
}