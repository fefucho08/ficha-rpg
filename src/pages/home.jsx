import "./home.css";
import AcessButton from "../components/home/accessButton";
import background from "../imagens/background.jpeg";
import { useContext, useEffect } from "react";
import { CharactersContext } from "../contexts/contexts";

export default function Home() {
    const { characters } = useContext(CharactersContext);

    useEffect(() => {
        console.log(characters);
    }, []);

    return (
        <div className="homeContainer">
            <img src={background} alt="" className="homeBackground" />
            <div className="homeContent">
                <h1>
                    Bem vindo ao <span>Fichas Paranormais</span>
                </h1>
                <p>
                    Um site feito por fã para a criação de fichas no sistema
                    Ordem Paranormal RPG
                </p>
            </div>
            <div className="homeOptions">
                {characters.length > 0 ? (
                    <>
                        <AcessButton text="Meus Personagens" to="/characters" />
                        <AcessButton text="Minhas campanhas" to="/gamemaster" />
                    </>
                ) : (
                    <AcessButton text="Criar Personagens!" to="/sheet" />
                )}
            </div>
        </div>
    );
}
