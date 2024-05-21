import {
    ChangeContext,
    CharactersContext,
} from "../../../../contexts/contexts";
import "../info.css";
import { useContext, useEffect, useState } from "react";

function Dados({ info, id, tipo, attribute }) {
    const { currentCharacter, characters } = useContext(CharactersContext);
    const change = useContext(ChangeContext);
    const [classe, setClasse] = useState("notFilled");

    useEffect(() => {
        if (characters[currentCharacter][attribute] === "")
            setClasse("notFilled");
        else setClasse("filled");
    }, [currentCharacter, characters]);

    function changeClasse(content) {
        if (content !== "") setClasse("filled");
        else setClasse("notFilled");
    }

    return (
        <div className="inputContainer">
            <label htmlFor={id}>{info}: </label>
            <input
                autoComplete="off"
                placeholder={info}
                id={id}
                type={tipo}
                className={classe}
                value={characters[currentCharacter][attribute]}
                onChange={(e) => {
                    changeClasse(e.target.value);
                    change(attribute, e.target.value, currentCharacter);
                }}
            />
        </div>
    );
}

export default function Personal() {
    return (
        <div className="box" id="personal">
            <Dados info="Jogador" id="jogador" tipo="text" attribute="player" />
            <Dados info="Origem" id="origem" tipo="text" attribute="origin" />
            <Dados info="Classe" id="classe" tipo="text" attribute="class" />
            <Dados info="Nex" id="nex" tipo="number" attribute="nex" />
        </div>
    );
}
