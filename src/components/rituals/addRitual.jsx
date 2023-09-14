import { useState } from "react"
import { FaRegTimesCircle } from "react-icons/fa"

export default function NewRitual(props) {

    const {isAddingRitual, ritualsList, setRitualsList} = props

    const [name, setName] = useState("")
    const [element, setElement] = useState("Sangue")
    const [circle, setCircle] = useState(1)
    const [execution, setExecution] = useState("Padrão")
    const [range, setRange] = useState("Pessoal")
    const [target, setTarget] = useState("")
    const [duration, setDuration] = useState("")
    const [resistence, setResistence] = useState("")
    const [description, setDescription] = useState("")
     
    const addRitual = (name, element, circle, execution, range, target, duration, resistence, description) => {
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
        console.log(ritualsList)
    }

    return (
        <div className="popUp ritualPopUp">
            <span onClick={() => isAddingRitual(false)}><FaRegTimesCircle/></span>
            <h1>Adicionar Ritual</h1>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
            <label htmlFor="element">Elemento:</label>
            <select value={element} onChange={(e) => setElement(e.target.value)} id="element">
                <option value="Sangue">Sangue</option>
                <option value="Morte">Morte</option>
                <option value="Energia">Energia</option>
                <option value="Medo">Medo</option>
                <option value="Conhecimento">Conhecimento</option>
            </select>
            <label htmlFor="circle">Círculo:</label>
            <select value={circle} onChange={(e) => setCircle(e.target.value)} id="circle">
                <option value={1}>1º círculo</option>
                <option value={2}>2º círculo</option>
                <option value={3}>3º círculo</option>
                <option value={4}>4º círculo</option>
            </select>
            <label htmlFor="execution">Execução:</label>
            <select value={execution} onChange={(e) => setExecution(e.target.value)} id="execution">
                <option value="Padrão">Padrão</option>
                <option value="Completa">Completa</option>
                <option value="Livre">Livre</option>
            </select>
            <label htmlFor="range">Alcance:</label>
            <select value={range} onChange={(e) => setRange(e.target.value)} id="range">
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
            <button onClick={() => addRitual(name, element, circle, execution, range, target, duration, resistence, description)}>Salvar</button>
        </div>
    )
}