import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortUP, sortDOWN, sortItemsName, sortItemsNameReverse } from "../../redux/store/action/itemsActions"

const ItemListHeader: React.FC<any> = ({items}) => {
    const dispatch = useDispatch()
    const [isSortName, setSortItemsName] = useState({isSort:false, iconArrow: ['']})
    const [isSortCount, setSortItemsCount] = useState({isSort:false, iconArrow: ['']})
    
    const sortCount = () => {
        if (!isSortCount.isSort) {
            dispatch(sortUP(items))
            setSortItemsCount({isSort:true, iconArrow: ['▲']})
        } else {
            dispatch(sortDOWN(items))
            setSortItemsCount({isSort:false, iconArrow: ['▼']})
        }
    }

    const sortName = () => {
        if (!isSortName.isSort) {
            dispatch(sortItemsName(items))
            setSortItemsName({isSort:true, iconArrow: ['▲']})
        } else {
            dispatch(sortItemsNameReverse(items))
            setSortItemsName({isSort:false, iconArrow: ['▼']})
        }
    }
    
    return (
        <div className="item-listing-header">
                <div className="item-listing-header-name" onClick={() => sortName()}>
                    <span>название</span>
                    <span className="sort-arrow">{isSortName.iconArrow}</span>
                    </div>
                <div className="item-listing-header-count" onClick={() => sortCount()}>
                    <span>кол-во</span>
                    <span className="sort-arrow">{isSortCount.iconArrow}</span>
                </div>
            </div>
    )
}

export default ItemListHeader;