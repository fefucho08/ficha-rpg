import '../info.css';
import {useState} from 'react';

function Dados({info, id, tipo}){

    const [classe, setClasse] = useState('notFilled');

    function changeClasse(content){
        if(content !=='') 
            setClasse('filled')
        else
            setClasse('notFilled')
    }

    return(
        <div className='inputContainer'>
            <label htmlFor={id}>{info}: </label>
            <input
                autoComplete='off'
                placeholder={info}
                id={id}
                type={tipo}
                className={classe}
                onChange={(e) => changeClasse(e.target.value)}
            />
        </div>
    )
}

export default function Personal(){

    return(
        <div className="box" id='personal'>
            <Dados
            info="Nome"
            id='nome'
            tipo='text'
            />
            <Dados
            info="Origem"
            id='origem'
            tipo='text'
            />
            <Dados
            info="Classe"
            id='classe'
            tipo='text'
            />
            <Dados
            info='Nex'
            id='nex'
            tipo='number'
            />
        </div>
    );
}
