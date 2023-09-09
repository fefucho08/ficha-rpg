import { useState } from "react"
import { FaRegTimesCircle } from "react-icons/fa"

export default function AddWeapons({addWeapon, isAdding}) {
    const [name, setName] = useState("")
    const [test, setTest] = useState("")
    const [damage, setDamage] = useState("")
    const [critical, setCritical] = useState("")
    const [range, setRange] = useState("")
    const [space, setSpace] = useState("")

    return (
        <div className="popUp addWeapon">
            <span onClick={() => isAdding(false)}>
                <FaRegTimesCircle/>
            </span>
            <h1>Adicionar Arma</h1>

            <div>
                <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="Teste"
                value={test}
                onChange={(e) => setTest(e.target.value)}
                />
                <input
                type="text"
                placeholder="Dano"
                value={damage}
                onChange={(e) => setDamage(e.target.value)}
                />
                <input
                type="text"
                placeholder="Crítico"
                value={critical}
                onChange={(e) => setCritical(e.target.value)}
                />
                <input
                type="text"
                placeholder="Alcance"
                value={range}
                onChange={(e) => setRange(e.target.value)}
                />
                <input
                type="number"
                placeholder="Espaço"
                value={space}
                onChange={(e) => setSpace(e.target.value)}
                />
                <button onClick={() =>{
                    if(name !== "" && test !== "" && damage !== "" && range !== ""){
                        addWeapon(name, space , test, damage, range, critical)
                        isAdding(false)
                    }
                }}>Salvar</button>

            </div>
        </div>
    )
}