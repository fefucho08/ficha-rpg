import { useContext, useEffect, useState, useRef } from "react";
import Sangue from "../../../imagens/Sangue.png";
import Morte from "../../../imagens/Morte.png";
import Energia from "../../../imagens/Energia.png";
import Medo from "../../../imagens/Medo.png";
import Conhecimento from "../../../imagens/Conhecimento.png";
import "./rituals.css";
import NewRitual from "./addRitual";
import RemoveRituals from "./removeRituals";
import { ChangeContext, CharactersContext } from "../../../contexts/contexts";

function SingularRitual(props) {
    const {
        name,
        element,
        circle,
        execution,
        range,
        target,
        duration,
        resistence,
        description,
    } = props;
    let image;

    switch (element) {
        case "Sangue":
            image = Sangue;
            break;
        case "Morte":
            image = Morte;
            break;
        case "Energia":
            image = Energia;
            break;
        case "Medo":
            image = Medo;
            break;
        case "Conhecimento":
            image = Conhecimento;
            break;
        default:
            break;
    }

    return (
        <div className="ritualBox">
            <div className="ritualHeader">
                <div className="ritualTitle">
                    <img src={image} alt={element} />
                    <h3>{name}</h3>
                    <br />
                    <input value={circle + "º círculo"} readOnly />
                    <input value={execution} readOnly />
                </div>
                <div className="ritualInfo">
                    <input value={range} readOnly />
                    <input value={target} readOnly />
                    <input value={duration} readOnly />
                    <input value={resistence} readOnly />
                </div>
            </div>
            <p className="ritualDescription">{description}</p>
        </div>
    );
}

export default function Rituals() {
    const { currentCharacter, characters } = useContext(CharactersContext);
    const charactersRef = useRef(characters);
    const change = useContext(ChangeContext);

    const [addingRitual, isAddingRitual] = useState(false);

    const [deletingRituals, isDeletingRituals] = useState(false);

    const [ritualsList, setRitualsList] = useState(
        characters[currentCharacter].rituals
    );

    useEffect(() => {
        change("rituals", ritualsList, currentCharacter);
    }, [ritualsList, change, currentCharacter]);

    useEffect(() => {
        setRitualsList(charactersRef.current[currentCharacter].rituals);
    }, [currentCharacter]);

    return (
        <>
            <div className="ritualsContainer">
                <div className="ritualsContainerHeader">
                    <h2>Rituais</h2>
                    <button
                        onClick={() => isAddingRitual(true)}
                        className="addButton"
                    >
                        +
                    </button>
                    <button
                        onClick={() => isDeletingRituals(true)}
                        className="removeButton"
                    >
                        -
                    </button>
                </div>
                {ritualsList.map((ritual) => (
                    <SingularRitual
                        key={ritual.id}
                        name={ritual.name}
                        element={ritual.element}
                        circle={ritual.circle}
                        execution={ritual.execution}
                        range={ritual.range}
                        target={ritual.target}
                        duration={ritual.duration}
                        resistence={ritual.resistence}
                        description={ritual.description}
                    />
                ))}
            </div>
            {addingRitual && (
                <NewRitual
                    isAddingRitual={isAddingRitual}
                    ritualsList={ritualsList}
                    setRitualsList={setRitualsList}
                />
            )}
            {deletingRituals && (
                <RemoveRituals
                    isDeletingRituals={isDeletingRituals}
                    ritualsList={ritualsList}
                    setRitualsList={setRitualsList}
                />
            )}
        </>
    );
}
