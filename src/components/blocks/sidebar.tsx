import { useDispatch } from "react-redux"
import { searchItem } from "../../redux/store/action/itemsActions"

const Sidebar:React.FC = () => {
    const dispatch = useDispatch()
    const search = (e:any) => {
        dispatch(searchItem(e.target.value))
    }
    return (
        <div className="sidebar-block">
            <span className="sidebar-block-title">Поиск предметов</span>
            <span>
                <input placeholder="Поиск" className="itemSearchBox" onChange={(e) => search(e)}/>
            </span>
        </div>
    )
}

export default Sidebar