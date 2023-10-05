import './photo.css'
import Photo from '../../../../imagens/fotoNaoDefinida.png'
import { useEffect, useState } from 'react';

export default function Foto(props){
    const {currentCharacter, change, characters} = props
    const [classe, setClasse] = useState('notFilled')
    const [srcPhoto, setSrcPhoto] = useState(Photo)

    useEffect(() => {
        if(characters[currentCharacter].photo !== "")
            setSrcPhoto(JSON.parse(characters[currentCharacter].photo))
        else
            setSrcPhoto(Photo)
    }, [currentCharacter, characters])


    // MUDAR FOTO

    function setPhoto(e){
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file){
            const reader = new FileReader();

            reader.onload = (e) => {
                const readerTarget = e.target;
                setSrcPhoto(readerTarget.result);
                change("photo", JSON.stringify(reader.result), currentCharacter)
            }
                
            
                
            reader.readAsDataURL(file);
        } else{

        }
        };

    useEffect(() => {
        if(document.getElementById("name").value === "")
            setClasse("notFilled")
        else
            setClasse("filled")
    }, [currentCharacter, characters])

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
                    <img src={srcPhoto} alt='Foto do Personagem' id='fotoPersonagem'/>
                </span>
            </label>
            <input 
                type='text' 
                className={classe} 
                onChange={(e) => {
                    changeClasse(e.target.value);
                    change("name", e.target.value, currentCharacter);
                }}
                value={characters[currentCharacter].name}
                id='name'
                placeholder='Nome'
            />
        </div>
    )
}