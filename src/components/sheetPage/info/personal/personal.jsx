import '../info.css';
import {useEffect , useState} from 'react';

function Dados({info, id, tipo, currentCharacter, change, characters, attribute}){

    const [classe, setClasse] = useState('notFilled');

    useEffect(() => {
        if(characters[currentCharacter][attribute] === "")
            setClasse("notFilled")
        else
            setClasse("filled")
    }, [currentCharacter, characters])

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
                value={characters[currentCharacter][attribute]}
                onChange={(e) => {
                    changeClasse(e.target.value);
                    change(attribute, e.target.value, currentCharacter)
                }}
            />
        </div>
    )
}

export default function Personal(props){

    const {currentCharacter, change, characters} = props
    return(
        <div className="box" id='personal'>
            <Dados
                info="Jogador"
                id='jogador'
                tipo='text'
                attribute="player"
                currentCharacter = {currentCharacter}
                change = {change}
                characters={characters}
            />
            <Dados
                info="Origem"
                id='origem'
                tipo='text'
                attribute="origin"
                currentCharacter = {currentCharacter}
                change = {change}
                characters={characters}
            />
            <Dados
                info="Classe"
                id='classe'
                tipo='text'
                attribute="class"
                currentCharacter = {currentCharacter}
                change = {change}
                characters={characters}
            />
            <Dados
                info='Nex'
                id='nex'
                tipo='number'
                attribute="nex"
                currentCharacter = {currentCharacter}
                change = {change}
                characters={characters}
            />
        </div>
    );
}
