import './header.css';
import logo from '../../Ordo.svg'
import toast from 'react-hot-toast';
import character from '../../character.json'

export default function Header(props){

    const {currentCharacter, setCurrentCharacter, characters, setCharacters} = props

    const removeCharacter = () => {
        if (characters.length > 1) {
            if(currentCharacter === (characters.length)-1)
                var isLast = true;
            const updatedCharacters = characters.filter(character => character.id !== currentCharacter);
    
            const updatedCharactersWithIds = updatedCharacters.map((character, index) => ({
                ...character,
                id: index,
            }));
            
            setCharacters(updatedCharactersWithIds);
            if(isLast)
                setCurrentCharacter(characters.length-1);
        } else {
            toast.error("Não é possível remover seu único personagem");
        }
        
    }

    const resetCharacter = () => {
        const resetedCharacter = JSON.parse(JSON.stringify(character));
        resetedCharacter.id = characters[currentCharacter].id;
        setCharacters(characters.map(character => {
            if(character.id === currentCharacter)
                return {...resetedCharacter}
            else
                return character
        }))
    }

    return(
        <div className="container" style={{textAlign: 'center'}}>
            <img
            style={{width: '130px'}}
            src={logo}
            alt='Logo da Ordo Realitas'
            />
            <h1>Ficha do Investigador</h1>
            <button onClick={() => resetCharacter()}>
                Resetar ficha
            </button>
            <button onClick={() => removeCharacter()}>
                Remover Personagem
            </button>
        </div>
    );
}
