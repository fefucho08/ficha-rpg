import { useState } from "react"
import { FaRegTimesCircle } from "react-icons/fa"
import toast from "react-hot-toast"

export default function NewRitual(props) {

    const {isAddingRitual, ritualsList, setRitualsList} = props

    const [name, setName] = useState("")
    const [element, setElement] = useState("")
    const [circle, setCircle] = useState("")
    const [execution, setExecution] = useState("")
    const [range, setRange] = useState("")
    const [target, setTarget] = useState("")
    const [duration, setDuration] = useState("")
    const [resistence, setResistence] = useState("")
    const [description, setDescription] = useState("")
     
    const addRitual = (name, element, circle, execution, range, target, duration, resistence, description) => {
        
        const param = [name, element, circle, execution, range, target, duration, resistence, description];
        const ehVazio = param.some(param => param === "")

        if(ehVazio){
            toast.error("É necessário preencher todas as informações!")
        } else {
            const newRitual = {
                id: Math.random(),
                name: name,
                element: element,
                circle: circle,
                execution: execution,
                range: range,
                target: target,
                duration: duration,
                resistence: resistence,
                description: description,
            }
            setRitualsList([...ritualsList, newRitual])
            isAddingRitual(false)
        }
    }

    return (
        <div className="popUp ritualPopUp">
            <span onClick={() => isAddingRitual(false)}><FaRegTimesCircle/></span>
            <h1>Adicionar Ritual</h1>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
            <select value={element} onChange={(e) => setElement(e.target.value)} id="element" className={element ? "selected" : ""}>
                <option value="">Elemento:</option>
                <option value="Sangue">Sangue</option>
                <option value="Morte">Morte</option>
                <option value="Energia">Energia</option>
                <option value="Medo">Medo</option>
                <option value="Conhecimento">Conhecimento</option>
            </select>
            <select value={circle} onChange={(e) => setCircle(e.target.value)} className={circle ? "selected" : ""} id="circle">
                <option value="">Círculo:</option>
                <option value={1}>1º círculo</option>
                <option value={2}>2º círculo</option>
                <option value={3}>3º círculo</option>
                <option value={4}>4º círculo</option>
            </select>
            <select value={execution} onChange={(e) => setExecution(e.target.value)} className={execution ? "selected" : ""} id="execution">
                <option value="">Execução:</option>
                <option value="Padrão">Padrão</option>
                <option value="Completa">Completa</option>
                <option value="Livre">Livre</option>
            </select>
            <select value={range} onChange={(e) => setRange(e.target.value)} className={range ? "selected" : ""} id="range">
                <option value="">Alcance:</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Toque">Toque</option>
                <option value="Curto">Curto</option>
                <option value="Médio">Médio</option>
                <option value="Longo">Longo</option>
                <option value="Extremo">Extremo</option>
                <option value="Ilimitado">Ilimitado</option>
            </select>
            <input type="text" value={target} onChange={(e) => setTarget(e.target.value)} placeholder="Alvo"/>
            <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duração"/>
            <input type="text" value={resistence} onChange={(e) => setResistence(e.target.value)} placeholder="Resistência"/>
            <textarea placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={() => {
                addRitual(name, element, circle, execution, range, target, duration, resistence, description)
                }}
            >Salvar</button>
        </div>
    )
}