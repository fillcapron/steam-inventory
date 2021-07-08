import { useState } from "react"

const usePagination = (items:any[]):any[] => {
    
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

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
            paginate 
    ]
}

export default usePagination