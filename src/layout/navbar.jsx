import { Link, useNavigate } from "react-router-dom"
import './navbar.css'
import desconjuracao from '../imagens/desconjuracao.png'
import {BiSolidUserAccount, BiLogIn, BiLogOut} from 'react-icons/bi'
import {GiDiceTwentyFacesOne} from 'react-icons/gi'

export default function NavBar(){

    const userId = sessionStorage.getItem("userId")
    
    const navigate = useNavigate()

    const logOut = () => {
        sessionStorage.clear()
        navigate('/')
        window.location.reload()
    }

    return(
        <nav className="navBar">
            <Link to="/">
                <img src={desconjuracao} alt="logo"/>
            </Link>
            <span className="navPages">
                {userId ? 
                <>
                <Link to="/characters">
                    <BiSolidUserAccount/>
                    Personagens
                </Link>
                <Link to="/gamemaster">
                    <GiDiceTwentyFacesOne/>
                    Área do Mestre
                </Link>
                    
                <Link onClick={() => logOut()}>
                    <BiLogOut/>
                    Sair
                </Link>
                </>
                :
                <Link to='/login'>
                    <BiLogIn/>
                    Entrar
                </Link>
                }
            </span>
        </nav>
    )
}