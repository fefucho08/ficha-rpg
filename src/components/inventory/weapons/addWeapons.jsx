import { useState } from "react"

export default function AddWeapons({addWeapon, setTrigger}) {
    const [name, setName] = useState("")
    const [test, setTest] = useState("")
    const [damage, setDamage] = useState("")
    const [range, setRange] = useState("")

    return (
        <div className="popUp addWeapon">
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
                placeholder="Alcance"
                value={range}
                onChange={(e) => setRange(e.target.value)}
                />
                <button onClick={() =>{
                    addWeapon(name, null , test, damage, range)
                    setTrigger(false)
                }}>Fechar</button>

            </div>
        </div>
    )
}