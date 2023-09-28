import { useState } from 'react'
import '../extra.css'

export default function CharacterDescription(){
    const [mainButton, setMainButton] = useState("sectionButton activeButton")
    const [detailsButton, setDetailsButton] = useState("sectionButton")
    const [notesButton, setNotesButton] = useState("sectionButton")

    const [mainSection, setMainSection] = useState("descriptionSection activeSection")
    const [detailsSection, setDetailsSection] = useState("descriptionSection")
    const [notesSection, setNotesSection] = useState("descriptionSection")

    const openMain = () => {
        setMainButton("sectionButton activeButton")
        setMainSection("descriptionSection activeSection")
        setDetailsButton("sectionButton")
        setDetailsSection("descriptionSection")
        setNotesButton("sectionButton")
        setNotesSection("descriptionSection")
    }

    const openDetails = () => {
        setMainButton("sectionButton")
        setMainSection("descriptionSection")
        setDetailsButton("sectionButton activeButton")
        setDetailsSection("descriptionSection activeSection")
        setNotesButton("sectionButton")
        setNotesSection("descriptionSection")
    }

    const openNotes = () => {
        setMainButton("sectionButton")
        setMainSection("descriptionSection")
        setDetailsButton("sectionButton")
        setDetailsSection("descriptionSection")
        setNotesButton("sectionButton activeButton")
        setNotesSection("descriptionSection activeSection")
    }

    return(
        <div className="extraInnerContainer">
            <div className="descriptionHeader">
                <h2>Sobre</h2>
                <div className="descriptionNavigationBar">
                    <button className={mainButton} onClick={() => openMain()}>Principal</button>
                    <button className={detailsButton} onClick={() => openDetails()}>Detalhes</button>
                    <button className={notesButton} onClick={() => openNotes()}>Anotações</button>
                </div>
            </div>
            <div className="descriptionContent">
                <div id="mainSection" className={mainSection}>
                    <label htmlFor="history">História</label>
                    <textarea id="history" placeholder='Clique para escrever'/>
                    <label htmlFor="appearence">Aparência</label>
                    <textarea id="appearence" placeholder='Clique para escrever'/>
                    <label htmlFor="personality">Personalidade</label>
                    <textarea id="personality" placeholder='Clique para escrever'/>
                </div>
                <div id="detailSection" className={detailsSection}>
                    <label htmlFor="fears">Medos e manias</label>
                    <textarea id="fears" placeholder='Clique para escrever'/>
                    <label htmlFor="favorites">Favoritos (pessoas, objetos)</label>
                    <textarea id="favorites" placeholder='Clique para escrever'/>
                    <label htmlFor="howEntered">Como entrou na Ordem</label>
                    <textarea id="howEntered" placeholder='Clique para escrever'/>
                </div>
                <div id="notesSection" className={notesSection}>
                    <label htmlFor="notes">Anotações do Caso</label>
                    <textarea id="notes" placeholder='Clique para escrever'/>
                </div>
            </div>
        </div>
    )
}