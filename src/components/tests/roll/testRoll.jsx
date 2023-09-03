import { FaRegTimesCircle } from 'react-icons/fa';

let result;
var rolls = [];

function Pop({setTrigger, name, extreme}){



    return (
        <div className="popUp">
            <span
            onClick={() => {
                setTrigger(false)
            }}
            >
                <FaRegTimesCircle/>
            </span>
            <h2>Rolagem de {name}</h2>
            <h3>{result}</h3>
            <p>Seus resultados foram: {rolls.join(", ")}</p>
        </div>
    )
}


export default function TestRoll({trigger, setTrigger, name, value, bonus}){

        if(bonus === undefined){
            bonus = 0;
        }

        rolls = [];

        if(value > 0){

            for(let i = 0; i < value; i ++){
                let roll = Math.floor(Math.random() * 20) + 1
                rolls.push(roll);
            }

            result = Math.max(...rolls)+bonus;
        }
        else {
            for(let i = 0; i < 2; i++){
                let roll = Math.floor(Math.random() * 20) + 1
                rolls.push(roll)
            }

            result = Math.min(...rolls)+bonus;
        }

    return (trigger) ? (
        <Pop
        setTrigger={setTrigger}
        name={name}
        />
    ) : ""
}