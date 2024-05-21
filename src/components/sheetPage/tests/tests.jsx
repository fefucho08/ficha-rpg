import { useCallback, useState } from "react";
import Attributes from "./attributes/attributes";
import TestRoll from "./roll/testRoll";
import Expertises from "./expertises/expertises";

export default function Tests() {
    const attributes = [
        {
            name: "Agilidade",
            attribute: "agility",
        },
        {
            name: "Intelecto",
            attribute: "intelect",
        },
        {
            name: "Vigor",
            attribute: "vigor",
        },
        {
            name: "Presenca",
            attribute: "presence",
        },
        {
            name: "Forca",
            attribute: "strength",
        },
    ];

    const expertises = [
        { name: "Acrobacia", attribute: "acrobacia" },
        { name: "Adestramento", attribute: "adestramento" },
        { name: "Artes", attribute: "artes" },
        { name: "Atletismo", attribute: "atletismo" },
        { name: "Atualidades", attribute: "atualidades" },
        { name: "Ciências", attribute: "ciencias" },
        { name: "Crime", attribute: "crime" },
        { name: "Diplomacia", attribute: "diplomacia" },
        { name: "Enganação", attribute: "enganacao" },
        { name: "Fortitude", attribute: "fortitude" },
        { name: "Furtividade", attribute: "furtividade" },
        { name: "Iniciativa", attribute: "iniciativa" },
        { name: "Intimidação", attribute: "intimidacao" },
        { name: "Intuição", attribute: "intuicao" },
        { name: "Investigação", attribute: "investigacao" },
        { name: "Luta", attribute: "luta" },
        { name: "Medicina", attribute: "medicina" },
        { name: "Ocultismo", attribute: "ocultismo" },
        { name: "Percepção", attribute: "percepcao" },
        { name: "Pilotagem", attribute: "pilotagem" },
        { name: "Pontaria", attribute: "pontaria" },
        { name: "Profissão", attribute: "profissao" },
        { name: "Reflexos", attribute: "reflexos" },
        { name: "Religião", attribute: "religiao" },
        { name: "Sobrevivência", attribute: "sobrevivencia" },
        { name: "Tática", attribute: "tatica" },
        { name: "Tecnologia", attribute: "tecnologia" },
        { name: "Vontade", attribute: "vontade" },
    ];

    // POPUP DA ROLAGEM DE DADOS
    const [trigger, setTrigger] = useState(false);
    const [rollName, setRollName] = useState("");
    const [rollValue, setRollValue] = useState(1);
    const [rollBonus, setRollBonus] = useState(0);

    const roll = useCallback((rollName, rollValue, rollBonus) => {
        setTrigger(true);
        setRollName(rollName);
        setRollValue(rollValue);
        setRollBonus(rollBonus);
    }, []);

    return (
        <div className="maxContainer">
            <Attributes attributes={attributes} roll={roll} />

            <Expertises expertises={expertises} roll={roll} />

            {trigger && (
                <TestRoll
                    trigger={trigger}
                    setTrigger={setTrigger}
                    name={rollName}
                    value={rollValue}
                    bonus={rollBonus}
                />
            )}
        </div>
    );
}
