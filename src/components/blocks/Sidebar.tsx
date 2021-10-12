import React from "react";
import { useAction } from "../../hooks/useActions";
import { usedTypedSelector } from "../../hooks/useTypedSelector";
import ButtonGames from "../UI/Button/ButtonGames";
import InputFetch from "../UI/Input/InputFetch";

const Sidebar: React.FC = () => {
    const { searchItem } = useAction();
    const { searchValue } = usedTypedSelector(state => state.search);

    const search = (e: React.SyntheticEvent<EventTarget>) => {
        searchItem((e.target as HTMLInputElement).value)
    }

    return (
        <div className="sidebar-block">
            <div className="sidebar-block-search">
                <span className="sidebar-block-title">Поиск предметов</span>
                <input placeholder="Поиск" value={searchValue ? searchValue : ''} className="itemSearchBox" onChange={(e) => search(e)} />
            </div>
            <div>
                <span className="sidebar-block-title">Ввести другой SteamID?</span>
                <InputFetch styles={'-mini'} />
                <span className="sidebar-block-title">Выбрать другую игру?</span>
                <ButtonGames />
            </div>
        </div>
    )
}

export default React.memo(Sidebar);