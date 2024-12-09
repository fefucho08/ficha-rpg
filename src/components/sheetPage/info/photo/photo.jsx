import "./photo.css";
import Photo from "../../../../imagens/fotoNaoDefinida.png";
import { useEffect, useState, useContext } from "react";
import {
    ChangeContext,
    CharactersContext,
} from "../../../../contexts/contexts";

export default function Foto() {
    const { currentCharacter, characters } = useContext(CharactersContext);
    const change = useContext(ChangeContext);
    const [classe, setClasse] = useState("notFilled");
    const [srcPhoto, setSrcPhoto] = useState(Photo);

    // Atualiza a foto sempre que o personagem ou a foto dele mudar
    useEffect(() => {
        const character = characters[currentCharacter];
        if (character && character.photo) {
            setSrcPhoto(JSON.parse(character.photo));
        } else {
            setSrcPhoto(Photo);
        }
    }, [currentCharacter, characters[currentCharacter]?.photo]);

    // Mudar foto
    function setPhoto(e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newPhoto = e.target.result;
                setSrcPhoto(newPhoto);
                change("photo", JSON.stringify(newPhoto), currentCharacter);
            };
            reader.readAsDataURL(file);
        }
    }

    // Classe de preenchimento do nome
    useEffect(() => {
        const character = characters[currentCharacter];
        if (character && character.name) {
            setClasse("filled");
        } else {
            setClasse("notFilled");
        }
    }, [currentCharacter, characters[currentCharacter]?.name]);

    function handleNameChange(e) {
        const newName = e.target.value;
        setClasse(newName ? "filled" : "notFilled");
        change("name", newName, currentCharacter);
    }

    return (
        <div className="photoContainer">
            <label className="picture">
                <input type="file" accept="image/*" onChange={setPhoto} />
                <span className="pictureImg">
                    <img
                        src={srcPhoto}
                        alt="Foto do Personagem"
                        id="fotoPersonagem"
                    />
                </span>
            </label>
            <input
                type="text"
                className={classe}
                onChange={handleNameChange}
                value={characters[currentCharacter]?.name || ""}
                id="name"
                placeholder="Nome"
            />
        </div>
    );
}
