import { useContext, useEffect, useState } from "react";
import AddItem from "./addItem";
import { FaTrashAlt } from "react-icons/fa";
import {
    ChangeContext,
    CharactersContext,
} from "../../../../contexts/contexts";

function SingularItem({ name, space, deleteItem, id }) {
    return (
        <div className="item">
            <p>{name}</p>
            <div className="right">
                <input type="number" value={space} readOnly className="space" />

                <button onClick={() => deleteItem(id)}>
                    <FaTrashAlt style={{ clear: "both" }} />
                </button>
            </div>
        </div>
    );
}

export default function Items({ items, setItems, weapons, setWeapons }) {
    const { characters, currentCharacter } = useContext(CharactersContext);
    const change = useContext(ChangeContext);

    const str = characters[currentCharacter].strength;
    const [trigger, setTrigger] = useState(false);

    const [space, setSpaceUsed] = useState(0);
    const [spaceMax, setSpaceMax] = useState(str * 5);

    useEffect(() => {
        setSpaceMax(str > 0 ? str * 5 : 2);
    }, [str]);

    useEffect(() => {
        const sum = items.reduce(
            (total, item) => total + parseInt(item.space),
            0
        );
        setSpaceUsed(sum);

        change("items", items, currentCharacter);
        change("weapons", weapons, currentCharacter);
    }, [items, change, currentCharacter, weapons]);

    const addItem = (item, space) => {
        const newItem = {
            id: crypto.randomUUID(),
            item: item,
            space: space,
        };

        setItems([...items, newItem]);
    };

    const deleteItem = (id) => {
        if (window.confirm("Deseja mesmo remover esse item?")) {
            const newInv = items.filter((item) => item.id !== id);
            const newWeapons = weapons.filter((weapon) => weapon.id !== id);

            setItems(newInv);
            setWeapons(newWeapons);
        }
    };

    return (
        <div className="containerInv">
            <div className="invHeader">
                <h2>Inventário</h2>
                <p style={{ color: "white" }}>
                    {space}/{spaceMax}
                </p>
                <button onClick={() => setTrigger(true)} className="addButton">
                    +
                </button>
            </div>

            {items.map((item) => (
                <SingularItem
                    key={item.id}
                    id={item.id}
                    name={item.item}
                    space={item.space}
                    deleteItem={deleteItem}
                />
            ))}

            {trigger && <AddItem setTrigger={setTrigger} addItem={addItem} />}
        </div>
    );
}
