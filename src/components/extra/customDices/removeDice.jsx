import { FaTrashAlt, FaRegTimesCircle } from "react-icons/fa"

export default function RemoveDices(props){

    const {savedDices, setSavedDices, isDeletingDices} = props

    const removeDice = (id) => {
        const newDices = savedDices.filter((dice) => dice.id !== id)
        setSavedDices(newDices)
    } 

    return (
        <div className="popUp deletePop">
            <span onClick={() => isDeletingDices(false)}><FaRegTimesCircle/></span>
            <h2>Remover Dados</h2>
            {savedDices.length > 0 ? (
                <ul>
                    {savedDices.map((dice) => (
                        <li>
                            {dice.name}
                            <span onClick={() => removeDice(dice.id)}><FaTrashAlt/></span>
                        </li>
                    ))}
                </ul>
            ) : "Nenhum dado personalizado"}
        </div>
    )
}