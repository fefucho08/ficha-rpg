import "./bar.css";
import { useContext } from "react";
import {
    CharactersContext,
    ChangeContext,
} from "../../../../../contexts/contexts";

export default function Bar({ max, tipo, attribute }) {
    const { currentCharacter, characters } = useContext(CharactersContext);
    const change = useContext(ChangeContext);
    return (
        <div>
            <div className="bar">
                <div
                    className="content"
                    id={tipo}
                    style={{
                        width: `${
                            (characters[currentCharacter][attribute] / max) *
                            100
                        }%`,
                    }}
                ></div>
                <span className="status">
                    <span>{tipo}: </span>
                    <input
                        value={characters[currentCharacter][attribute]}
                        onChange={(e) =>
                            change(attribute, e.target.value, currentCharacter)
                        }
                    />
                    <span>/{max}</span>
                </span>
            </div>
        </div>
    );
}
