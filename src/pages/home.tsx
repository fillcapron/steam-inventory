import React from "react";
import ItemList from '../components/ItemList';
import Sidebar from "../components/blocks/sidebar";
import TakeInventory from "../components/blocks/take-inventory";
import { usedTypedSelector } from "../hooks/useTypedSelector";
import InputFetch from "../components/UI/input/inputFetch";
import ButtonGames from "../components/UI/button/buttonsGames";
import Profile from "../components/profile";

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
                            <Profile />
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