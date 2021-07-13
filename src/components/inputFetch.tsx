interface InputProps {
    id: string,
    getInventory: Function,
    handler: Function
}

const Input:React.FC<InputProps> = ({id, getInventory, handler}) => {
    return(
        <div className="input-group mb-3 mt-3">
                <input type="text" className="form-control" value={id} onChange={(e)=> handler(e)} placeholder="Введите свой SteamID"/>
                <button className="btn btn-success" onClick={() => getInventory()}>Fetch</button>
            </div>
    )
}

export default Input