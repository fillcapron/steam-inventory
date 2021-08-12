import { useDispatch } from "react-redux"
import { searchItem } from "../../redux/store/action/itemsActions"
import PanelInfo from "../UI/panel"

const Sidebar:React.FC = () => {
    const dispatch = useDispatch()
    const search = (e:any) => {
        dispatch(searchItem(e.target.value))
    }
    return (
        <PanelInfo title="Поиск предметов"><input placeholder="AK-47" onChange={(e) => search(e)}/></PanelInfo>
    )
}

export default Sidebar