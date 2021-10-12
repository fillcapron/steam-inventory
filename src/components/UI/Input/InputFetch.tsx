import React from "react";
import { useEffect, useState } from "react";
import { useFetchItems } from '../../../hooks/useFetchItems'
import Panel from "../Panels/Panel";

interface IInputProps {
    styles?: Array<string> | string
}

const InputFetch: React.FC<IInputProps> = ({styles}) => {
    const [isError, getInventory] = useFetchItems()
    const [id, setId] = useState(localStorage.getItem('id') || '');

    useEffect(() => {
        localStorage.setItem('id', id);
    }, [id]);

    const handlerId = (e: React.SyntheticEvent<EventTarget>) => setId((e.target as HTMLInputElement).value);

    console.log('Input')
    return (
        <>
            {isError.error ? <Panel type="danger">{isError.description}</Panel> : null}
            <div className={ 'inventory-takeover-input' + (styles || '')}>
                <input type="text" value={id} onChange={handlerId} placeholder="Введите свой SteamID" />
                <button className="btn btn-success" onClick={() => getInventory()}>Получить</button>
            </div>
        </>
    )
}

export default React.memo(InputFetch);