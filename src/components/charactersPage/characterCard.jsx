import { Link } from "react-router-dom";
import './characterCard.css'

export default function CharacterCard(props){
    const {name, origin, classe, id, onHandleClick} = props;

    return(
        <Link className="characterCard" onClick={() => onHandleClick(id)} to="/sheet">
            <h3>{name ? name : "Novo Personagem"}</h3>
            <span>Classe: </span>
            <span>{classe ? classe : "Sem classe"}</span>
            <span>Origem: </span>
            <span>{origin ? origin : "Sem origem"}</span>
        </Link>
    )
}