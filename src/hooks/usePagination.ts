import { useState } from "react"
import { Items } from "../types/types"


const usePagination = (items:Items[]):any[] => {
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    let currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
    if (!currentItems.length){
        setCurrentPage(1)
        currentItems = items
    }
    const countItems = items.length

    const indexItem = {
        indexOfLastItem: indexOfLastItem ,
        indexOfFirstItem: indexOfFirstItem + 1
    }

    const paginate = (pageNumber:number) => setCurrentPage(pageNumber)

    return [
            currentPage,
            currentItems,
            itemsPerPage,
            indexItem,
            paginate,
            countItems 
    ]
}

export default usePagination