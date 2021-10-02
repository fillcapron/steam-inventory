import React, { useState } from 'react';
import ItemListTable from './itemListTable';
import ItemListGrid from './ItemListGrid';
import { usedTypedSelector } from "../hooks/useTypedSelector";
import Sorting from './UI/sorting';
import { MdViewHeadline, MdViewModule } from 'react-icons/md';

const ItemList: React.FC = () => {
    const { error, payload, loading } = usedTypedSelector(state => state.item);
    const [mode, setMode] = useState('table')
    const { items } = payload;
    const { searchValue } = usedTypedSelector(state => state.search);
    const filtredItems = items?.filter((item) => item.name.toLowerCase().includes(searchValue)) || [];


    if (loading) return <h1>Идет загрузка</h1>
    if (error) return <h1>{error}</h1>

    return (
        <>
            {
                items ?
                    <div>
                        <div className="list-header">
                            <Sorting items={items} />
                            <div className="list-mode">
                                <MdViewHeadline className="list-mode-table" onClick={() => setMode('table')} />
                                <MdViewModule className="list-mode-grid" onClick={() => setMode('grid')} />
                            </div>
                        </div>
                        {
                            mode === 'table' ?
                                <ItemListTable items={filtredItems} />
                                :
                                <ItemListGrid items={filtredItems} />
                        }

                    </div>
                    : 'Нет предметов в инвентаре'
            }
        </>
    )
}

export default ItemList;