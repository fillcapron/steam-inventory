import React, { useState } from 'react';
import ItemListTable from './ItemListTable';
import ItemListGrid from './ItemListGrid';
import { usedTypedSelector } from "../hooks/useTypedSelector";
import Sorting from './Sorting';
import { MdViewHeadline, MdViewModule } from 'react-icons/md';
import Panel from './UI/Panels/panel';
import SkeletonItems from './UI/Loader/LoaderItems';

const ItemList: React.FC = () => {
    const { error, payload, loading } = usedTypedSelector(state => state.item);
    const [mode, setMode] = useState('table')
    const { items } = payload;
    const { searchValue } = usedTypedSelector(state => state.search);
    const filtredItems = items?.filter((item) => item.name.toLowerCase().includes(searchValue)) || [];


    if (loading) return <SkeletonItems/>
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
                    : <Panel type={'info mt-2'}>Нет предметов в инвентаре</Panel>
            }
        </>
    )
}

export default ItemList;