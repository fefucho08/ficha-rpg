import '../info.css';

function Dados({info, id}){
    return(
        <div>
            <label htmlFor={id}>{info}: </label>
            <input
                autoComplete='off'
                placeholder={info}
                id={id}
            />
        </div>
    )
}

export default function Personal(){
    return(
        <div className="box" id='personal'>
            <Dados
            info="Nome"
            id='nome'
            />
            <Dados
            info="Origem"
            id='origem'
            />
            <Dados
            info="Classe"
            id='classe'
            />
        </div>
    );
}
