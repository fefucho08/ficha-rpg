import '../tests.css'
import D20 from '../../../imagens/d20.png'

function SingularExpertise({expertiseName, roll, expertise, attributes, currentCharacter, change, characters}){

    const rollExp = () => {
        let bonus = characters[currentCharacter][expertise];

        let agilidade = ["Acrobacia", "Crime", "Furtividade", "Iniciativa", "Pilotagem","Pontaria", "Reflexos"];
        let intelecto = ["Atualidades", "Ciências", "Investigação", "Medicina", "Ocultismo", "Profissão", "Sobrevivência", "Tática", "Tecnologia"];
        let vigor = ["Fortitude"];
        let presenca = ["Adestramento", "Artes", "Diplomacia", "Enganação", "Intimidação", "Intuição", "Percepção", "Religião", "Vontade"];
        let forca = ["Atletismo", "Luta"];

        if(agilidade.find(e => e === expertiseName))
            roll(expertiseName, parseInt(characters[currentCharacter].agility), bonus)
        else if(intelecto.find(e => e === expertiseName))
            roll(expertiseName, parseInt(characters[currentCharacter].intelect), bonus)
        else if(vigor.find(e => e === expertiseName))
            roll(expertiseName, parseInt(characters[currentCharacter].vigor), bonus)
        else if(presenca.find(e => e === expertiseName))
            roll(expertiseName, parseInt(characters[currentCharacter].presence), bonus)
        else if(forca.find(e => e === expertiseName))
            roll(expertiseName, parseInt(characters[currentCharacter].strength), bonus)
    }

    return(
        <div className='boxExp'>

            <img
                onClick={() => rollExp()}
                src={D20}
                alt='d20'
                className='d20'
            />
            <p>{expertiseName}</p>
            <select className='inputTreinamento' onChange={(e) => change(expertise, parseInt(e.target.value), currentCharacter)} value={characters[currentCharacter][expertise]}>
                <option value="0">Nenhum</option>
                <option value="5">Treinado</option>
                <option value="10">Veterano</option>
                <option value="15">Expert</option>
            </select>
        </div>
    )
}

export default function Expertises({expertises, roll, attributes, currentCharacter, change, characters}){
    var componentsArr = [];

    for(let i = 0; i < 28; i++){
        componentsArr.push(
        <SingularExpertise
            expertiseName = {expertises[i].name}
            expertise = {expertises[i].attribute}
            index = {i}
            key = {i}
            roll = {roll}
            attributes={attributes}
            currentCharacter = {currentCharacter}
            change = {change}
            characters = {characters}
        />)
    }
    
    return (
        <div className="containerAtt">
            <h2>Perícias</h2>
            {componentsArr}
        </div>
    )
}