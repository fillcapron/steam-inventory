import { useDispatch } from "react-redux"
import { usedTypedSelector } from "../../hooks/useTypedSelector"
import { searchItem } from "../../redux/store/action/itemsActions"

const Sidebar:React.FC = () => {
    const {items} = usedTypedSelector(state => state.item)
    const dispatch = useDispatch()
    const search = (e:any) => {
        e.preventDefault()
        console.log(e.target.value)
        dispatch(searchItem(items, e.target.value))
    }
    return (
        <div>
            <span>Поиск предметов</span>
            <input placeholder="Поиск" onChange={(e) => search(e)}/>
        </div>
    )
}

export default Sidebar