import InputFetch from "../UI/input/inputFetch";
import ButtonGames from "../UI/button/buttonsGames";
import PanelInfo from "../UI/panel/InfoPanel";

const TakeInventory: React.FC = () => {

    return (
        <div className="inventory-takeover">
            <div className="inventory-takeover-container">
                <h1 className="header-title">Steam Inventory</h1>
                <h3 className="header-subtitle">Calculate the value of your Steam Inventory</h3>
                <InputFetch />
                <PanelInfo>
                    <span>Choise the game:</span>
                    <div className="button-group" >
                        <ButtonGames />
                    </div>
                </PanelInfo>
            </div>
        </div>
    )
}

export default TakeInventory;