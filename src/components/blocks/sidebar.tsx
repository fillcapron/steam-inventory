import React from "react";
import { useAction } from "../../hooks/useActions";
import { usedTypedSelector } from "../../hooks/useTypedSelector";

const Sidebar: React.FC = () => {
    const { searchItem } = useAction();
    const { searchValue } = usedTypedSelector(state => state.search);

    const search = (e: React.SyntheticEvent<EventTarget>) => {
        searchItem((e.target as HTMLInputElement).value)
    }

    return (
        <div className="sidebar-block">
            <span className="sidebar-block-title">Поиск предметов</span>
            <span>
                <input placeholder="Поиск" value={searchValue ? searchValue : ''} className="itemSearchBox" onChange={(e) => search(e)} />
            </span>
        </div>
    )
}

export default React.memo(Sidebar);