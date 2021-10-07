import React, { useState } from 'react';
import ItemListTable from './ItemListTable';
import ItemListGrid from './ItemListGrid';
import { usedTypedSelector } from "../hooks/useTypedSelector";
import Sorting from './Sorting';
import { MdList, MdViewModule } from 'react-icons/md';
import Panel from './UI/Panels/Panel';
import SkeletonItems from './UI/Loader/LoaderItems';
import SelectedGame from './UI/Panels/SelectedGame';

const ItemList: React.FC = () => {
    const { error, payload, loading } = usedTypedSelector(state => state.item);
    const [mode, setMode] = useState('table')
    const { items } = payload;
    const { searchValue } = usedTypedSelector(state => state.search);
    const filtredItems = items?.filter((item) => item.name.toLowerCase().includes(searchValue)) || [];


    if (loading) return <SkeletonItems />
    if (error) return <Panel type={'danger mt-5 text-center'}>{error}</Panel>
    
    return (
        <>
            <SelectedGame />
            {
                items?.length ?
                    <div>
                        <div className="list-header">
                            <Sorting items={items} />
                            <div className="list-mode">
                                <MdList className="list-mode-table" onClick={() => setMode('table')} />
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
                    : <Panel type={'info mt-2 text-center'}>Нет предметов в инвентаре</Panel>
            }
        </>
    )
}

export default ItemList;