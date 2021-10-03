import React from "react";
import ItemList from '../components/ItemList';
import Sidebar from "../components/blocks/Sidebar";
import TakeInventory from "../components/blocks/Main";
import { usedTypedSelector } from "../hooks/useTypedSelector";
import InputFetch from "../components/UI/Input/InputFetch";
import ButtonGames from "../components/UI/Button/ButtonGames";

const Home: React.FC = () => {
    const { isFetching } = usedTypedSelector(state => state.item);

    console.log(isFetching)
    return (
        !isFetching ?
            <TakeInventory />
            :
            <>
                <div className="content">
                    <div className="row">
                        <div className="d-flex">
                            <div>
                                <InputFetch />
                                <ButtonGames />
                            </div>
                        </div>
                        <div className="main">
                            <ItemList />
                        </div>
                        <div className="sidebar">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Home;