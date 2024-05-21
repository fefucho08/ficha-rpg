import { useEffect, useState, useRef } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import validator from "../../../../validator";
import "../extra.css";

export default function CustomDiceRoll(props) {
    const { value, name, isDamage, isRolling } = props;

    const [valid, isValid] = useState(false);
    const [result, setResult] = useState(0);
    const [rolls, setRolls] = useState([]);

    const validation = useRef(validator(value));
    const isDamageRef = useRef(isDamage);

    useEffect(() => {
        if (!validation.current) {
            isValid(false);
            isRolling(false);
        } else {
            isValid(true);
            let newRolls = [];
            let result = 0;

            for (let i = 0; i < validation.current.multiplier; i++) {
                let newRoll =
                    Math.floor(Math.random() * validation.current.dice) + 1;
                newRolls.push(newRoll);
                if (isDamageRef.current) {
                    result += newRoll;
                } else {
                    result = Math.max(result, newRoll);
                }
            }

            result += validation.current.bonus;

            setResult(result);
            setRolls(newRolls);
        }
    }, [value, isRolling]);

    return valid ? (
        <div className="popUp">
            <span onClick={() => isRolling(false)}>
                <FaRegTimesCircle />
            </span>
            <h2>Rolagem de {name}</h2>
            <h3>{result}</h3>
            <p>Os resultados foram: {rolls.join(", ")}</p>
        </div>
    ) : (
        ""
    );
}
