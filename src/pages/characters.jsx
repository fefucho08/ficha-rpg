import LastCharacter from "../components/charactersPage/lastCharacter";
import CharacterCard from "../components/charactersPage/characterCard";
import AcessButton from "../components/home/accessButton";
import "./characters.css";
import { useContext } from "react";
import { CharactersContext } from "../contexts/contexts";
export default function Characters() {
    const { characters, currentCharacter, setCurrentCharacter } =
        useContext(CharactersContext);

    return characters.length > 0 ? (
        <div className="charactersSection">
            <h1>Meus Personagens</h1>
            <div className="lastCharacterSection">
                <h2>Último Personagem</h2>
                {characters.map((character) => {
                    if (character.id === currentCharacter)
                        return (
                            <LastCharacter
                                photo={character.photo}
                                name={character.name}
                                classe={character.class}
                                origin={character.origin}
                            />
                        );
                    else return "";
                })}
            </div>
            <div className="otherCharacters">
                <h2>Outros personagens</h2>
                {characters.map((character) => {
                    if (character.id !== currentCharacter)
                        return (
                            <CharacterCard
                                name={character.name}
                                classe={character.class}
                                origin={character.origin}
                                id={character.id}
                                onHandleClick={setCurrentCharacter}
                            />
                        );
                    else return "";
                })}
            </div>
        </div>
    ) : (
        <div className="noCharactersContent">
            <h1>
                Você não possui <span>nenhum personagem</span>
            </h1>
            <p>Clique no botão abaixo para começar a criar!</p>
            <AcessButton text="Criar Personagens!" to="/sheet" />
        </div>
    );
}
