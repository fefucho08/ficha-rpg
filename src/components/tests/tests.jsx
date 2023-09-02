import { useState } from "react"
import Attributes from "./attributes/attributes"
import TestRoll from "./roll/testRoll";
import Expertises from "./expertises/expertises"

export default function Tests(){
    
    // USESTATES DOS ATRIBUTOS
    const [agilidade, setAgilidade] = useState(1);
    const [intelecto, setIntelecto] = useState(1);
    const [vigor, setVigor] = useState(1);
    const [presenca, setPresenca] = useState(1);
    const [forca, setForca] = useState(1);

    const attributes = [
        {
            name: "Agilidade",
            value: agilidade,
        },
        {
            name: "Intelecto",
            value: intelecto,
        },
        {
            name: "Vigor",
            value: vigor,
        },
        {
            name: "Presenca",
            value: presenca,
        },
        {
            name: "Forca",
            value: forca,
        },
    ]
    ;

    const setAttributes = {
        Agilidade: setAgilidade,
        Intelecto: setIntelecto,
        Vigor: setVigor,
        Presenca: setPresenca,
        Forca: setForca,
    }

    // USESTATES DOS BONUS PERICIAS
    const [acrobacia, setAcrobacia] = useState(0);
    const [adestramento, setAdestramento] = useState(0);
    const [artes, setArtes] = useState(0);
    const [atletismo, setAtletismo] = useState(0);
    const [atualidades, setAtualidades] = useState(0);
    const [ciencias, setCiencias] = useState(0);
    const [crime, setCrime] = useState(0);
    const [diplomacia, setDiplomacia] = useState(0);
    const [enganacao, setEnganacao] = useState(0);
    const [fortitude, setFortitude] = useState(0);
    const [furtividade, setFurtividade] = useState(0);
    const [iniciativa, setIniciativa] = useState(0);
    const [intimidacao, setIntimidacao] = useState(0);
    const [intuicao, setIntuicao] = useState(0);
    const [investigacao, setInvestigacao] = useState(0);
    const [luta, setLuta] = useState(0);
    const [medicina, setMedicina] = useState(0);
    const [ocultismo, setOcultismo] = useState(0);
    const [percepcao, setPercepcao] = useState(0);
    const [pilotagem, setPilotagem] = useState(0);
    const [pontaria, setPontaria] = useState(0);
    const [profissao, setProfissao] = useState(0);
    const [reflexos, setReflexos] = useState(0);
    const [religiao, setReligiao] = useState(0);
    const [sobrevivencia, setSobrevivencia] = useState(0);
    const [tatica, setTatica] = useState(0);
    const [tecnologia, setTecnologia] = useState(0);
    const [vontade, setVontade] = useState(0);


    const expertises = [
        {
            name: 'Acrobacia',
            value: acrobacia,
            method: setAcrobacia,
        },
        {
            name: 'Adestramento',
            value: adestramento,
            method: setAdestramento,
        },
        {
            name: 'Artes',
            value: artes,
            method: setArtes,
        },
        {
            name: 'Atletismo',
            value: atletismo,
            method: setAtletismo,
        },
        {
            name: 'Atualidades',
            value: atualidades,
            method: setAtualidades,
        },
        {
            name: 'Ciencias',
            value: ciencias,
            method: setCiencias,
        },
        {
            name: 'Crime',
            value: crime,
            method: setCrime,
        },
        {
            name: 'Diplomacia',
            value: diplomacia,
            method: setDiplomacia,
        },
        {
            name: 'Enganacao',
            value: enganacao,
            method: setEnganacao,
        },
        {
            name: 'Fortitude',
            value: fortitude,
            method: setFortitude,
        },
        {
            name: 'Furtividade',
            value: furtividade,
            method: setFurtividade,
        },
        {
            name: 'Iniciativa',
            value: iniciativa,
            method: setIniciativa,
        },
        {
            name: 'Intimidacao',
            value: intimidacao,
            method: setIntimidacao,
        },
        {
            name: 'Intuicao',
            value: intuicao,
            method: setIntuicao,
        },
        {
            name: 'Investigacao',
            value: investigacao,
            method: setInvestigacao,
        },
        {
            name: 'Luta',
            value: luta,
            method: setLuta,
        },
        {
            name: 'Medicina',
            value: medicina,
            method: setMedicina,
        },
        {
            name: 'Ocultismo',
            value: ocultismo,
            method: setOcultismo,
        },
        {
            name: 'Percepcao',
            value: percepcao,
            method: setPercepcao,
        },
        {
            name: 'Pilotagem',
            value: pilotagem,
            method: setPilotagem,
        },
        {
            name: 'Pontaria',
            value: pontaria,
            method: setPontaria,
        },
        {
            name: 'Profissao',
            value: profissao,
            method: setProfissao,
        },
        {
            name: 'Reflexos',
            value: reflexos,
            method: setReflexos,
        },
        {
            name: 'Religiao',
            value: religiao,
            method: setReligiao,
        },
        {
            name: 'Sobrevivencia',
            value: sobrevivencia,
            method: setSobrevivencia,
        },
        {
            name: 'Tatica',
            value: tatica,
            method: setTatica,
        },
        {
            name: 'Tecnologia',
            value: tecnologia,
            method: setTecnologia,
        },
        {
            name: 'Vontade',
            value: vontade,
            method: setVontade,
        }]
    

    // POPUP DA ROLAGEM DE DADOS
    const [trigger, setTrigger] = useState(false)
    const [rollName, setRollName] = useState("")
    const [rollValue, setRollValue] = useState(1)
    const [rollBonus, setRollBonus] = useState(0)


    const roll = (rollName, rollValue, rollBonus) => {
        setTrigger(true);
        setRollName(rollName);
        setRollValue(rollValue);
        setRollBonus(rollBonus)
    }

    return (
        <div style={{marginTop: '40px', display: 'flex', justifyContent: 'space-between'}}>

            <Attributes 
            attributes={attributes} 
            setAttributes = {setAttributes}
            roll = {roll}
            />


            <Expertises
            expertises={expertises}
            roll = {roll}
            attributes={attributes}
            />

            {trigger && 
            <TestRoll
            trigger = {trigger}
            setTrigger = {setTrigger}
            name = {rollName}
            value = {rollValue}
            bonus = {rollBonus}
            />}
            
        </div>
    )
}