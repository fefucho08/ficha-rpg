import { Link } from "react-router-dom"
import './navbar.css'
import desconjuracao from '../imagens/desconjuracao.png'
import {BiSolidUserAccount} from 'react-icons/bi'
import {GiDiceTwentyFacesOne} from 'react-icons/gi'

export default function NavBar(){
    return(
        <nav className="navBar">
            <Link to="/">
                <img src={desconjuracao} alt="logo"/>
            </Link>
            <span className="navPages">
                <Link to="/characters">
                    <BiSolidUserAccount/>
                    Personagens
                </Link>
                <Link to="/gamemaster">
                    <GiDiceTwentyFacesOne/>
                    Área do Mestre
                </Link>
            </span>
        </nav>
    )
}