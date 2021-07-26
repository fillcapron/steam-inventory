import { useState } from "react"
import { useDispatch } from "react-redux"
import { sortDOWN, sortItemsName, sortUP } from "../redux/store/action/itemsActions"
import { Items } from "../types/types"



export const useSort= (items:Items[]):any[] => {
    const dispatch = useDispatch()
    const [isSortName, setSortItemsName] = useState(false)
    const [isSortCount, setSortItemsCount] = useState(false)
    const [iconArrow, setIconArrow] = useState([''])

    function sortFunction(type:string, ref:any){
        if (type === 'count') {
            console.log(ref.current.innerText)
            ref.current?.classList.add('active')
            if(!isSortCount) {
                dispatch(sortUP(items))
                setSortItemsCount(true)
                setIconArrow(['▲'])
            } else {
                dispatch(sortDOWN(items))
                setSortItemsCount(false)
                setIconArrow(['▼'])
            }
        }
        if (type === 'name'){
            ref.current?.classList.add('active')
            if(!isSortName) {
                dispatch(sortItemsName(items))
                setSortItemsName(true)
                setIconArrow(['▲'])
            } else {
                dispatch(sortItemsName(items))
                setSortItemsName(false)
                setIconArrow(['▼'])
            }
        }
    }
    return [
        iconArrow,
        sortFunction
    ]
    
}