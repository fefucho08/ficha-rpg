import defaultPhoto from '../../imagens/fotoNaoDefinida.png'
import './lastCharacter.css'
import { Link } from 'react-router-dom'

export default function LastCharacter(props){
    const {photo, name, classe, origin} = props

    return (
        <Link className="lastCharacterCard" to="/sheet">
            <div className="cardHeader">
                <img src={photo ? JSON.parse(photo) : defaultPhoto} alt={name} className={!photo && "noImage"}/>
                <h3>{name ? name : "Novo Personagem"}</h3>
            </div>
            <div className="cardContent">
                <span>Classe: </span>
                <span>{classe ? classe : "Sem classe"}</span>
                <span>Origem: </span>
                <span>{origin ? origin : "Sem origem"}</span>
            </div>
        </Link>
    )
}