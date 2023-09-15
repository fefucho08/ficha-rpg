import './photo.css'
import Photo from '../../../imagens/fotoNaoDefinida.png'
import { useState } from 'react';

export default function Foto(){

    const [classe, setClasse] = useState('notFilled')
    
    // MUDAR FOTO

    function setPhoto(e){
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file){
            const reader = new FileReader();

            reader.onload = (e) => {
                const readerTarget = e.target;
                const foto = document.getElementById("fotoPersonagem");
                foto.src = readerTarget.result;
            }
                
            
                
            reader.readAsDataURL(file);
        } else{

        }
        };


    function changeClasse(content){
        if(content !== '')
            setClasse('filled')
        else
            setClasse('notFilled')
    }
    return(
        <div className="photoContainer">
            <label className='picture'>
                <input type='file' accept='image/*' onChange={setPhoto}/>
                <span className='pictureImg'>
                    <img src={Photo} alt='Foto do Personagem' id='fotoPersonagem'/>
                </span>
            </label>
            <input 
            type='text' 
            className={classe} 
            onChange={(e) => changeClasse(e.target.value)}
            id='name'
            placeholder='Nome'
            />
        </div>
    )
}