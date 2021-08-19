import { useDispatch } from "react-redux"
import { usedTypedSelector } from "../../hooks/useTypedSelector"
import { searchItem } from "../../redux/store/action/itemsActions"

const Sidebar:React.FC = () => {
    const dispatch = useDispatch()
    const {searchValue} = usedTypedSelector(state => state.search)
    const search = (e:any) => {
        dispatch(searchItem(e.target.value))
    }
    return (
        <div className="sidebar-block">
            <span className="sidebar-block-title">Поиск предметов</span>
            <span>
                <input placeholder="Поиск" value={searchValue?searchValue:''}className="itemSearchBox" onChange={(e) => search(e)}/>
            </span>
        </div>
    )
}

export default Sidebar