import { useState } from 'react';
import './bar.css';

export default function Bar({max, tipo}){

    const [atual, setAtual] = useState(10);

    return(
        <div>
            <div className='bar'>
                <div className='content' id={tipo} style={{
                    width: `${(atual/max)*100}%`
                }}></div>
                <span className='status'>
                    <input
                    value={atual}
                    onChange={(e) => setAtual(e.target.value)}/>
                    <span>/{max}</span>
                </span>
            </div>
        </div>
    )
}