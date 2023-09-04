import { useState } from 'react'
import D20 from '../../../imagens/d20.png'
import '../tests.css'

function SingularAttribute({attribute, roll}){

    const [value, setValue] = useState(1);

    return(
        <div 
        className='boxAtt'
        >
            <img 
            src={D20} 
            alt='d20' 
            className='d20'
            onClick={() => roll(attribute.name, value)}/>
            <p>{attribute.name}</p>
            <input
            value={attribute.value}
            type='number'
            onChange={(e) => {
                attribute.method(e.target.value)
                setValue(e.target.value)
            }}
            />
        </div>
    )
}

export default function Attributes({attributes, roll}){
    const attributesComponents = []

    for(let i = 0; i < 5; i++)
        attributesComponents.push(<SingularAttribute attribute={attributes[i]} roll = {roll}/>)
    
    
    return (
        <div className='containerAtt'>

            <h2>Atributos</h2>

            {attributesComponents}
        </div>
    )
}
