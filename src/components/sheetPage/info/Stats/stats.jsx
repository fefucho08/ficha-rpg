import { useContext, useState } from "react";
import Bar from "./bar/bar";
import PopUpMax from "./changeMax/changeMax";
import "./stats.css";
import { CharactersContext } from "../../../../contexts/contexts";

export default function Stats() {
    const { currentCharacter, characters } = useContext(CharactersContext);
    const [popUp, setPopUp] = useState(false);

    const variables = {
        Vida: characters[currentCharacter].hpMax,
        San: characters[currentCharacter].sanMax,
        Pe: characters[currentCharacter].peMax,
    };

    return (
        <div className="box">
            <Bar max={variables.Vida} tipo="PV" attribute="hp" />
            <Bar max={variables.San} tipo="San" attribute="san" />
            <Bar max={variables.Pe} tipo="PE" attribute="pe" />
            <button
                className="editButton"
                onClick={() => {
                    setPopUp(true);
                }}
            >
                Editar
            </button>
            <PopUpMax
                trigger={popUp}
                setTrigger={setPopUp}
                variables={variables}
            />
        </div>
    );
}
