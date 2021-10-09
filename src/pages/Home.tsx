import React from "react";
import ItemList from '../components/ItemList';
import Sidebar from "../components/blocks/Sidebar";
import Main from "../components/blocks/Main";
import { usedTypedSelector } from "../hooks/useTypedSelector";

const Home: React.FC = () => {
    const { isFetching, payload } = usedTypedSelector(state => state.item);

    console.log(isFetching)
    return (
        !isFetching ?
            <Main />
            :
            <>
                <div className="content min-height" style={{ background: `#1b2838 url(${payload.bg}) center top/100% no-repeat`}}>
                    <div className="_row">
                        {/* <div className="d-flex">
                            <div>
                                <InputFetch />
                                <ButtonGames />
                            </div>
                        </div> */}
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