import '../tests.css'
import D20 from '../../../imagens/d20.png'

function SingularExpertise({expertiseName, setExp, roll, expertises, index, attributes}){

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

            <img
            onClick={() => rollExp()}
            src={D20}
            alt='d20'
            className='d20'
            />
            <p>{expertiseName}</p>
            <select className='inputTreinamento' onChange={(e) => setExp(parseInt(e.target.value))}>
                <option value="0">Nenhum</option>
                <option value="5">Treinado</option>
                <option value="10">Veterano</option>
                <option value="15">Expert</option>
            </select>
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
            key = {i}
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