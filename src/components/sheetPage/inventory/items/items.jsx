import { useContext, useEffect, useState, useMemo } from "react";
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

    const str = characters[currentCharacter]?.strength || 0;
    const [trigger, setTrigger] = useState(false);

    const spaceMax = useMemo(() => (str > 0 ? str * 5 : 2), [str]);
    const spaceUsed = useMemo(() => {
        return items.reduce((total, item) => total + parseInt(item.space), 0);
    }, [items]);

    useEffect(() => {
        change("items", items, currentCharacter);
    }, [items, change, currentCharacter]);

    useEffect(() => {
        change("weapons", weapons, currentCharacter);
    }, [weapons, change, currentCharacter]);

    const addItem = (item, space) => {
        const newItem = {
            id: crypto.randomUUID(),
            item: item,
            space: space,
        };
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const deleteItem = (id) => {
        if (window.confirm("Deseja mesmo remover esse item?")) {
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
            setWeapons((prevWeapons) =>
                prevWeapons.filter((weapon) => weapon.id !== id)
            );
        }
    };

    return (
        <div className="containerInv">
            <div className="invHeader">
                <h2>Inventário</h2>
                <p style={{ color: "white" }}>
                    {spaceUsed}/{spaceMax}
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
