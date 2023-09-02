import './changeMax.css';
import { FaRegTimesCircle } from 'react-icons/fa';


function ChangeDefault({tipo, setVar, variable}){
    return (
    <div className='changeDefault'>
        <h2>{tipo} Máx.</h2>
        <input
        className='inputMax'
        type='number'
        placeholder = {10}
        value={variable}
        onChange={(e) => setVar(e.target.value)}
        />
    </div>
    
    )
}


export default function PopUpMax({trigger, setTrigger, variables, setVars}){
    return (trigger) ? (
        <div className="popUp">
            <span onClick={() =>{
                if(variables.Vida === '')
                    setVars.Vida(10);
                
                if(variables.San === '')
                    setVars.San(10)

                if(variables.Pe === '')
                    setVars.Pe(10)

                setTrigger(false);
            }}>
                <FaRegTimesCircle/>
            </span>
            
            <h1 style={{color:'black'}}>Editar Variáveis</h1>
            <ChangeDefault 
            tipo = 'Vida' 
            setVar={setVars.Vida} 
            variable={variables.Vida}
            />

            <ChangeDefault
            tipo='San'
            setVar={setVars.San}
            variable={variables.San}
            />

            <ChangeDefault
            tipo='PE'
            setVar={setVars.Pe}
            variable={variables.Pe}
            />
        </div>
    ) : "";
}