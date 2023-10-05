import D20 from '../../../../imagens/d20.png'
import '../tests.css'

function SingularAttribute({attribute, roll, currentCharacter, change, characters}){

    const value = characters[currentCharacter][attribute.attribute]

    return(
        <div className='boxAtt'>
            <img 
                src={D20} 
                alt='d20' 
                className='d20'
                onClick={() => roll(attribute.name, value)}
            />
            <p>{attribute.name}</p>
            <input
                value={value}
                type='number'
                onChange={(e) => {
                    change(attribute.attribute, e.target.value, currentCharacter)
            }}
            />
        </div>
    )
}

export default function Attributes({attributes, roll, currentCharacter, change, characters}){
    const attributesComponents = []

    for(let i = 0; i < 5; i++)
        attributesComponents.push(
            <SingularAttribute 
                attribute={attributes[i]} 
                roll = {roll} 
                key={i}
                currentCharacter = {currentCharacter} 
                change = {change} 
                characters = {characters}
            />
        )
    
    
    return (
        <div className='containerAtt'>

            <h2>Atributos</h2>

            {attributesComponents}
        </div>
    )
}
