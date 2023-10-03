import Personal from './personal/personal';
import Foto from './photo/photo';
import Stats from './Stats/stats';
import './info.css';

export default function Info(props){
    const {currentCharacter, change, characters} = props
    return(
        <div className="firstContainer">
            <Personal 
                currentCharacter = {currentCharacter} 
                change = {change} 
                characters = {characters}
            />
            <Foto
                currentCharacter = {currentCharacter} 
                change = {change} 
                characters = {characters}
            />
            <Stats
                currentCharacter = {currentCharacter} 
                change = {change} 
                characters = {characters}
            />
        </div>
    );
}