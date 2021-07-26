import { useEffect, useState } from "react"

interface InputProps {
    getInventory: Function
}

const Input:React.FC<InputProps> = ({getInventory}) => {
    const [id, setId] = useState('')
    useEffect(()=> {
        setId(localStorage.getItem('id') || '')
     }, [])
    const handler = (e: any) => setId(e.target.value)
    return(
        <div className="input-group mb-3 mt-3">
                <input type="text" className="form-control" value={id} onChange={handler} placeholder="Введите свой SteamID"/>
                <button className="btn btn-success" onClick={() => getInventory(id)}>Fetch</button>
            </div>
    )
}

export default Input