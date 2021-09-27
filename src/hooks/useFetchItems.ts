import { useState } from "react"
import { useAction } from "./useActions";

interface IError {
    error: boolean,
    description: string
}

export const useFetchItems = (): [IError, Function] => {
    const { fetchItems } = useAction();
    const [isError, setError] = useState({ error: false, description: '' });

    function getInventory() {
        const id = localStorage.getItem('id') || ''
        const app = localStorage.getItem('app') || ''

        if (id && app) {
            fetchItems(id, app)
            setError({ ...isError, error: false });
        } else {
            setError({ error: true, description: app ? 'Вы не ввели Steam ID' : 'Вы не выбрали игру' });
        }
    }

    return [isError, getInventory]
}
