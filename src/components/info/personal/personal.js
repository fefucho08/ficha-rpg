import '../info.css';

function Dados({info, id, tipo}){


    return(
        <div className='inputContainer'>
            <label htmlFor={id}>{info}: </label>
            <input
                autoComplete='off'
                placeholder={info}
                id={id}
                type={tipo}
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
            tipo='text'
            />
            <Dados
            info="Origem"
            id='origem'
            tipo='text'
            />
            <Dados
            info="Classe"
            id='classe'
            tipo='text'
            />
            <Dados
            info='Nex'
            id='nex'
            tipo='number'
            />
        </div>
    );
}
