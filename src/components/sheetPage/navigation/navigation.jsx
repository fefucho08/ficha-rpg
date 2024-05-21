import { AiOutlineUserAdd } from "react-icons/ai";
import character from "../../../character.json";
import toast from "react-hot-toast";
import "./navigation.css";
import { useContext } from "react";
import { CharactersContext } from "../../../contexts/contexts";

export default function CharactersNavigation() {
    const { characters, setCharacters, currentCharacter, setCurrentCharacter } =
        useContext(CharactersContext);

    const addCharacter = () => {
        if (characters.length === 7)
            toast.error("Número máximo de personagens atingido!");
        else {
            const newCharacter = JSON.parse(JSON.stringify(character));
            newCharacter.id = characters.length;
            setCharacters([...characters, newCharacter]);
        }
    };

    return (
        <nav className="navigationBar">
            <div className="charactersList">
                {characters.map((character) => {
                    if (character.id === currentCharacter)
                        return (
                            <div
                                className="characterTab current"
                                onClick={() =>
                                    setCurrentCharacter(character.id)
                                }
                                key={character.id}
                            >
                                {character.name !== ""
                                    ? character.name
                                    : "Novo Personagem"}
                            </div>
                        );
                    else
                        return (
                            <div
                                className="characterTab"
                                onClick={() =>
                                    setCurrentCharacter(character.id)
                                }
                                key={character.id}
                            >
                                {character.name !== ""
                                    ? character.name
                                    : "Novo Personagem"}
                            </div>
                        );
                })}
            </div>
            <button className="addCharacter" onClick={() => addCharacter()}>
                <AiOutlineUserAdd />
                Adicionar Personagem
            </button>
        </nav>
    );
}
