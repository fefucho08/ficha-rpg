import '../tests.css'
import D20 from '../../../imagens/d20.png'
import {useState } from 'react';

function SingularExpertise({expertiseName, setExp, roll, expertises, index, attributes}){

    const [hover, setHover] = useState("Nenhum");

    const changeBonus = (e) => {
        if(e.target.value === null)
            setHover("Nenhum");
        else
            setHover(e.target.value)

        switch(e.target.value){
            case ("Nenhum"):
                setExp(0);
                break;
            case ("Treinado"):
                setExp(5);
                break;
            case ("Veterano"):
                setExp(10);
                break;
            case ("Expert"):
                setExp(15);
                break;
            default:
                setExp(0);
                break;
        }
    }

    const rollExp = () => {
        let bonus = expertises[index].value;

        let agilidade = ["Acrobacia", "Crime", "Furtividade", "Iniciativa", "Pilotagem","Pontaria", "Reflexos"];
        let intelecto = ["Atualidades", "Ciências", "Investigação", "Medicina", "Ocultismo", "Profissão", "Sobrevivência", "Tática", "Tecnologia"];
        let vigor = ["Fortitude"];
        let presenca = ["Adestramento", "Artes", "Diplomacia", "Enganação", "Intimidação", "Intuição", "Percepção", "Religião", "Vontade"];
        let forca = ["Atletismo", "Luta"];

        if(agilidade.find(e => e === expertiseName))
            roll(expertiseName, attributes[0].value, bonus)
        if(intelecto.find(e => e === expertiseName))
            roll(expertiseName, attributes[1].value, bonus)
        if(vigor.find(e => e === expertiseName))
            roll(expertiseName, attributes[2].value, bonus)
        if(presenca.find(e => e === expertiseName))
            roll(expertiseName, attributes[3].value, bonus)
        if(forca.find(e => e === expertiseName))
        roll(expertiseName, attributes[4].value, bonus)


    }

    return(
        <div className='boxExp'>

            <datalist id='treinamento'>
                <option value='Nenhum'></option>
                <option value="Treinado"></option>
                <option value="Veterano"></option>
                <option value="Expert"></option>
            </datalist>


            <img
            onClick={() => rollExp()}
            src={D20}
            alt='d20'
            className='d20'
            />
            <p>{expertiseName}</p>
            <input
            onChange={(e) => {
                changeBonus(e)
            }}
            onClick={() => setHover("")}
            value = {hover}
            className='inputTreinamento'
            list='treinamento'
            />
        </div>
    )
}


export default function Expertises({expertises, roll, attributes}){
    var componentsArr = [];

    for(let i = 0; i < 28; i++){
        componentsArr.push(
        <SingularExpertise
        expertiseName = {expertises[i].name}
        expertiseBonus = {expertises[i].value}
        setExp = {expertises[i].method}
        expertises = {expertises}
        index = {i}
        roll = {roll}
        attributes={attributes}
        />)
    }
    
    return (
        <div className="containerAtt">
            <h2>Perícias</h2>
            {componentsArr}
        </div>
    )
}