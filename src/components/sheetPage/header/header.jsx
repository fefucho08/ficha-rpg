import "./header.css";
import logo from "../../../Ordo.svg";
import toast from "react-hot-toast";
import { useContext } from "react";
import { CharactersContext } from "../../../contexts/contexts";

export default function Header() {
    const { characters, setCharacters, currentCharacter, setCurrentCharacter } =
        useContext(CharactersContext);

    const removeCharacter = () => {
        if (characters.length > 1) {
            const updatedCharacters = characters.filter(
                (character) => character.id !== currentCharacter
            );

            const updatedCharactersWithIds = updatedCharacters.map(
                (character, index) => ({
                    ...character,
                    id: index,
                })
            );

            setCharacters(updatedCharactersWithIds);
            setCurrentCharacter(0);
        } else {
            toast.error("Não é possível remover seu único personagem");
        }
    };

    return (
        <div className="container" style={{ textAlign: "center" }}>
            <img
                style={{ width: "130px" }}
                src={logo}
                alt="Logo da Ordo Realitas"
            />
            <h1>Ficha do Investigador</h1>
            <button onClick={() => removeCharacter()}>
                Remover Personagem
            </button>
        </div>
    );
}
