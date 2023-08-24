import { useState } from 'react'
import Bar from './bar/bar'

export default function Stats(){
    
    const [vidaMax, setVidaMax] = useState(10);
    const [sanMax, setSanMax] = useState(10);
    const [peMax, setPeMax] = useState(10);

    return(
        <div className="box">
            <Bar
            max={vidaMax}
            tipo='vida'
            />
            <Bar
            max={sanMax}
            tipo='san'
            />
            <Bar
            max={peMax}
            tipo='PE'
            />
            <button>Editar</button>
        </div>
    )
}