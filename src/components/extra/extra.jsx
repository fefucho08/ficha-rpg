import CustomDices from "./customDices/customDices"
import CharacterDescription from "./characterDescription/characterDescription"

export default function Extra(props){

    const {currentCharacter, change, characters} = props
    
    return (
        <div className="maxContainer">
            <CustomDices
                currentCharacter = {currentCharacter} 
                change = {change} 
                characters = {characters}
            />
            <CharacterDescription
                currentCharacter = {currentCharacter} 
                change = {change} 
                characters = {characters}
            />
        </div>
    )
}