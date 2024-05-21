import { useContext, useState } from "react";
import "../extra.css";
import {
    ChangeContext,
    CharactersContext,
} from "../../../../contexts/contexts";

export default function CharacterDescription() {
    const { currentCharacter, characters } = useContext(CharactersContext);
    const change = useContext(ChangeContext);

    const [mainButton, setMainButton] = useState("sectionButton activeButton");
    const [detailsButton, setDetailsButton] = useState("sectionButton");
    const [notesButton, setNotesButton] = useState("sectionButton");

    const [mainSection, setMainSection] = useState(
        "descriptionSection activeSection"
    );
    const [detailsSection, setDetailsSection] = useState("descriptionSection");
    const [notesSection, setNotesSection] = useState("descriptionSection");

    const openMain = () => {
        setMainButton("sectionButton activeButton");
        setMainSection("descriptionSection activeSection");
        setDetailsButton("sectionButton");
        setDetailsSection("descriptionSection");
        setNotesButton("sectionButton");
        setNotesSection("descriptionSection");
    };

    const openDetails = () => {
        setMainButton("sectionButton");
        setMainSection("descriptionSection");
        setDetailsButton("sectionButton activeButton");
        setDetailsSection("descriptionSection activeSection");
        setNotesButton("sectionButton");
        setNotesSection("descriptionSection");
    };

    const openNotes = () => {
        setMainButton("sectionButton");
        setMainSection("descriptionSection");
        setDetailsButton("sectionButton");
        setDetailsSection("descriptionSection");
        setNotesButton("sectionButton activeButton");
        setNotesSection("descriptionSection activeSection");
    };

    return (
        <div className="extraInnerContainer">
            <div className="descriptionHeader">
                <h2>Sobre</h2>
                <div className="descriptionNavigationBar">
                    <button className={mainButton} onClick={() => openMain()}>
                        Principal
                    </button>
                    <button
                        className={detailsButton}
                        onClick={() => openDetails()}
                    >
                        Detalhes
                    </button>
                    <button className={notesButton} onClick={() => openNotes()}>
                        Anotações
                    </button>
                </div>
            </div>
            <div className="descriptionContent">
                <div id="mainSection" className={mainSection}>
                    <label htmlFor="history">História</label>
                    <textarea
                        id="history"
                        placeholder="Clique para escrever"
                        value={characters[currentCharacter].history}
                        onChange={(e) =>
                            change("history", e.target.value, currentCharacter)
                        }
                    />
                    <label htmlFor="appearance">Aparência</label>
                    <textarea
                        id="appearance"
                        placeholder="Clique para escrever"
                        value={characters[currentCharacter].appearance}
                        onChange={(e) =>
                            change(
                                "appearance",
                                e.target.value,
                                currentCharacter
                            )
                        }
                    />
                    <label htmlFor="personality">Personalidade</label>
                    <textarea
                        id="personality"
                        placeholder="Clique para escrever"
                        value={characters[currentCharacter].personality}
                        onChange={(e) =>
                            change(
                                "personality",
                                e.target.value,
                                currentCharacter
                            )
                        }
                    />
                </div>
                <div id="detailSection" className={detailsSection}>
                    <label htmlFor="fears">Medos e manias</label>
                    <textarea
                        id="fears"
                        placeholder="Clique para escrever"
                        value={characters[currentCharacter].fears}
                        onChange={(e) =>
                            change("fears", e.target.value, currentCharacter)
                        }
                    />
                    <label htmlFor="favorites">
                        Favoritos (pessoas, objetos)
                    </label>
                    <textarea
                        id="favorites"
                        placeholder="Clique para escrever"
                        value={characters[currentCharacter].favorites}
                        onChange={(e) =>
                            change(
                                "favorites",
                                e.target.value,
                                currentCharacter
                            )
                        }
                    />
                    <label htmlFor="howEntered">Como entrou na Ordem</label>
                    <textarea
                        id="howEntered"
                        placeholder="Clique para escrever"
                        value={characters[currentCharacter].howEntered}
                        onChange={(e) =>
                            change(
                                "howEntered",
                                e.target.value,
                                currentCharacter
                            )
                        }
                    />
                </div>
                <div id="notesSection" className={notesSection}>
                    <label htmlFor="notes">Anotações do Caso</label>
                    <textarea
                        id="notes"
                        placeholder="Clique para escrever"
                        value={characters[currentCharacter].notes}
                        onChange={(e) =>
                            change("notes", e.target.value, currentCharacter)
                        }
                    />
                </div>
            </div>
        </div>
    );
}
