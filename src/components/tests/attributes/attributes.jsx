import { useState } from 'react'
import D20 from '../../../imagens/d20.png'
import '../tests.css'

function SingularAttribute({attributeName, attributeVar, setAtt, roll}){

    const [value, setValue] = useState(1);

    return(
        <div 
        className='boxAtt'
        >
            <img 
            src={D20} 
            alt='d20' 
            className='d20'
            onClick={() => roll(attributeName, value)}/>
            <p>{attributeName}</p>
            <input
            value={attributeVar}
            type='number'
            onChange={(e) => {
                setAtt(e.target.value)
                setValue(e.target.value)
            }}
            />
        </div>
    )
}

export default function Attributes({attributes, setAttributes, roll}){
    return (
        <div className='containerAtt'>

            <h2>Atributos</h2>

            <SingularAttribute
            attributeName = "Agilidade"
            attributeVar = {attributes[0].value}
            setAtt = {setAttributes.Agilidade}
            roll = {roll}
            />

            <SingularAttribute
            attributeName="Intelecto"
            attributeVar={attributes[1].value}
            setAtt={setAttributes.Intelecto}
            roll = {roll}
            />

            <SingularAttribute
            attributeName="Vigor"
            attributeVar={attributes[2].value}
            setAtt={setAttributes.Vigor}
            roll = {roll}
            />

            <SingularAttribute
            attributeVar={attributes[3].value}
            setAtt={setAttributes.Presenca}
            attributeName="Presença"
            roll = {roll}
            />

            <SingularAttribute
            attributeVar={attributes[4].value}
            setAtt={setAttributes.Forca}
            attributeName="Força"
            roll = {roll}
            />
        </div>
    )
}
