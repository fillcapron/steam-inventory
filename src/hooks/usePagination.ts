import { useState } from "react";
import { Items } from "../types/types";

interface IndexItem {
    indexOfLastItem: number,
    indexOfFirstItem: number
}

const usePagination = (items: Items[], itemsPerPage: number): [number, Items[], number, IndexItem, Function, number] => {
    const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage] = useState(10);

    const indexOfLastItem: number = currentPage * itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    let currentItems: Items[] = items.slice(indexOfFirstItem, indexOfLastItem);

    if (!currentItems.length && items.length) {
        setCurrentPage(1);
        currentItems = items;
    }

    const countItems: number = items.length;

    const indexItem = {
        indexOfLastItem: indexOfLastItem,
        indexOfFirstItem: indexOfFirstItem + 1
    }

    const paginate: Function = (pageNumber: number) => setCurrentPage(pageNumber);

    return [
        currentPage,
        currentItems,
        itemsPerPage,
        indexItem,
        paginate,
        countItems
    ]
}

export default usePagination;