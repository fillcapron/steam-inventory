import React, { useState } from 'react';
import ItemListTable from './itemListTable';
import { usedTypedSelector } from "../hooks/useTypedSelector";
import usePagination from "../hooks/usePagination";
import Pagination from "./Paginations";
import Sorting from './UI/sorting';
import { MdViewHeadline, MdViewModule } from 'react-icons/md';
import ItemListGrid from './ItemListGrid';

const ItemList: React.FC = () => {
    const { error, payload, loading } = usedTypedSelector(state => state.item);
    const [mode, setMode] = useState('table')
    const { items } = payload;
    const { searchValue } = usedTypedSelector(state => state.search);
    const filtredItems = items?.filter((item) => item.name.toLowerCase().includes(searchValue)) || [];
    const [currentPage, currentItems, itemsPerPage, index, paginate, countItems] = usePagination(filtredItems, 20);
    const { indexOfLastItem, indexOfFirstItem } = index;

    if (loading) return <h1>Идет загрузка</h1>
    if (error) return <h1>{error}</h1>

    return (
        <>
            {
                currentItems.length ?
                    <div>
                        <div className="list-header">
                            <Sorting items={items} />
                            <div className="list-mode">
                                <MdViewHeadline className="list-mode-table" onClick={() => setMode('table')} />
                                <MdViewModule className="list-mode-grid" onClick={() => setMode('grid')}/>
                            </div>
                        </div>
                        {
                            mode === 'table' ?
                            <ItemListTable items={currentItems}/> 
                            :
                            <ItemListGrid items={currentItems}/>
                        }
                        <Pagination
                            currentPage={currentPage}
                            paginate={paginate}
                            itemsPerPage={itemsPerPage}
                            countItems={countItems}
                            resultSearchNum={{ indexOfLastItem, indexOfFirstItem }}
                        />
                    </div>
                    : 'Нет предметов в инвентаре'
            }
        </>
    )
}

export default ItemList;