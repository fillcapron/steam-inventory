import { useDispatch } from "react-redux"
import { searchItem } from "../../redux/store/action/itemsActions"

const Sidebar:React.FC = () => {
    const dispatch = useDispatch()
    const search = (e:any) => {
        dispatch(searchItem(e.target.value))
    }
    return (
        <div className="sidebar-content">
            <span>Поиск предметов</span>
            <input placeholder="Поиск" onChange={(e) => search(e)}/>
        </div>
    )
}

export default Sidebar