import './header.css';
import logo from '../../Ordo.svg'

export default function Header(){
    return(
        <div className="container" style={{textAlign: 'center'}}>
            <img
            style={{width: '130px'}}
            src={logo}
            alt='Logo da Ordo Realitas'
            />
            <h1>Ficha do Investigador</h1>
            <button
            onClick={() => {
                window.location.reload();
            }}
            >Resetar</button>
        </div>
    );
}
