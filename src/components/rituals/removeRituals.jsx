import { FaTrashAlt, FaRegTimesCircle } from "react-icons/fa"

export default function RemoveRituals(props){

    const {ritualsList, setRitualsList, isDeletingRituals} = props

    const deleteRitual = (id) => {
        const newRituals = ritualsList.filter((ritual) => ritual.id !== id)
        setRitualsList(newRituals)
    }

    return(
        <div className="popUp deletePop">
            <span onClick={() => isDeletingRituals(false)}><FaRegTimesCircle/></span>
            <h2>Remover Rituais</h2>
            {ritualsList.length > 0 ? (
                <ul>
                    {ritualsList.map((ritual) => (
                        <li>
                            {ritual.name}
                            <span onClick={() => deleteRitual(ritual.id)}><FaTrashAlt/></span>
                        </li>
                    ))}
                </ul>
            ) : "Nenhum ritual"}
        </div>
    )
}