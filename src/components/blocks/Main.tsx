import InputFetch from "../UI/Input/InputFetch";
import ButtonGames from "../UI/Button/ButtonGames";
import PanelInfo from "../UI/Panels/InfoPanel";

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