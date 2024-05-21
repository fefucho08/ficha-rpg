import { useEffect, useState, useRef } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import validator from "../../../../../validator";

export default function TestWeapon({
    test,
    isTesting,
    name,
    damage,
    critical,
    setTestName,
    setDamage,
    isRollingDamage,
}) {
    const [valid, isValid] = useState(true);

    const validation = validator(test);

    useEffect(() => {
        if (!validation) {
            isValid(false);
            isTesting(false);
        }
    }, [isTesting, validation]);

    return valid ? (
        <TestWeaponRoll
            name={name}
            multiplier={validation.multiplier}
            dice={validation.dice}
            bonus={validation.bonus}
            isTesting={isTesting}
            damage={damage}
            critical={critical}
            setTestName={setTestName}
            setDamage={setDamage}
            isRollingDamage={isRollingDamage}
        />
    ) : (
        ""
    );
}

function TestWeaponRoll({
    name,
    multiplier,
    dice,
    bonus,
    isTesting,
    damage,
    critical,
    isRollingDamage,
    setTestName,
    setDamage,
}) {
    const [result, setResult] = useState(0);
    const [rolls, setRolls] = useState([]);

    useEffect(() => {
        let newRolls = [];
        let result = 0;

        for (let i = 0; i < multiplier; i++) {
            let newRoll = Math.floor(Math.random() * dice) + 1;
            newRolls.push(newRoll);
            result += newRoll;
        }

        result = Math.max(...newRolls) + bonus;

        setResult(result);
        setRolls(newRolls);
    }, [bonus, dice, multiplier]);

    return (
        <div className="popUp testWeapon">
            <div>
                <span onClick={() => isTesting(false)}>
                    <FaRegTimesCircle />
                </span>
                <h2>Teste de {name}</h2>
                <h3>{result}</h3>
                <p>Seus resultados foram: {rolls.join(", ")}</p>
            </div>
            <div className="options">
                <button
                    onClick={() => {
                        setTestName(name);
                        setDamage(damage);
                        isTesting(false);
                        isRollingDamage(true);
                    }}
                >
                    Rolar Dano
                </button>
                <button
                    onClick={() => {
                        setTestName(name);
                        setDamage(critical);
                        isTesting(false);
                        isRollingDamage(true);
                    }}
                >
                    Rolar Crítico
                </button>
            </div>
        </div>
    );
}

export function DamageRoll({ name, damage, isRollingDamage }) {
    const [valid, isValid] = useState(false);
    const [result, setResult] = useState(0);
    const [rolls, setRolls] = useState([]);

    const validation = useRef(validator(damage));

    useEffect(() => {
        if (!validation.current) {
            isValid(false);
        } else {
            isValid(true);
            let newRolls = [];
            let result = 0;

            for (let i = 0; i < validation.current.multiplier; i++) {
                let newRoll =
                    Math.floor(Math.random() * validation.current.dice) + 1;
                newRolls.push(newRoll);
                result += newRoll;
            }

            result += validation.current.bonus;

            setResult(result);
            setRolls(newRolls);
        }
    }, [damage]);

    return valid ? (
        <div className="popUp">
            <span onClick={() => isRollingDamage(false)}>
                <FaRegTimesCircle />
            </span>
            <h2>Rolagem de Dano de {name}</h2>
            <h3>{result}</h3>
            <p>Seus resultados foram: {rolls.join(", ")}</p>
        </div>
    ) : (
        ""
    );
}
