import { FaRegTimesCircle } from "react-icons/fa";
import "../tests.css";
import { useState, useEffect } from "react";

function Pop({ setTrigger, name, result, rolls }) {
    return (
        <div className="popUp">
            <span
                onClick={() => {
                    setTrigger(false);
                }}
            >
                <FaRegTimesCircle />
            </span>
            <h2>Rolagem de {name}</h2>
            <h3>{result}</h3>
            <p>Seus resultados foram: {rolls.join(", ")}</p>
        </div>
    );
}

export default function TestRoll({ trigger, setTrigger, name, value, bonus }) {
    const [result, setResult] = useState(0);
    const [rolls, setRolls] = useState([]);

    useEffect(() => {
        if (trigger) {
            let newRolls = [];
            let result;

            let bonusValue = bonus === undefined ? 0 : bonus;

            if (value > 0) {
                for (let i = 0; i < value; i++) {
                    let roll = Math.floor(Math.random() * 20) + 1;
                    newRolls.push(roll);
                }
                result = Math.max(...newRolls) + bonusValue;
            } else {
                for (let i = 0; i < 2; i++) {
                    let roll = Math.floor(Math.random() * 20) + 1;
                    newRolls.push(roll);
                }
                result = Math.min(...newRolls) + bonusValue;
            }

            setResult(result);
            setRolls(newRolls);
        }
    }, [trigger, value, bonus]);

    return trigger ? (
        <Pop
            setTrigger={setTrigger}
            name={name}
            result={result}
            rolls={rolls}
        />
    ) : (
        ""
    );
}
