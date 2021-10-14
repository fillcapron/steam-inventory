import React, { useEffect, useState } from "react";
import { imgGame, GameAppId } from "./types";

const ButtonGames: React.FC = () => {
    const [app, setApp] = useState<string | undefined>(localStorage.getItem('app') || '');
    const games = ['Team Fortress 2', 'CS:GO', 'Dota 2', 'Rust', 'Unturned', 'PAYDAY 2', 'BattleBlock Theater', 'Primal Carnage: Extinction', 'Killing Floor 2', 'Don\'t Starve Together', 'PLAYERUNKNOWN\'S BATTLEGROUNDS', 'Artifact', 'H1Z1: King of the Kill', 'Steam'];

    useEffect(() => {
        localStorage.setItem('app', app || '');
    }, [app]);

    const handlerApp = (e: React.SyntheticEvent<EventTarget>) => setApp((e.target as HTMLInputElement).value || (e.target as HTMLInputElement).dataset.g);

    const GameButton = games.map((gameName) => {
        return (
            <button type="button"
                value={GameAppId[gameName]}
                onClick={handlerApp}
                key={gameName}
                className={app === GameAppId[gameName] ? 'button-active' : 'button'}
            >
                <img data-g={GameAppId[gameName]}
                    height="32" width="32"
                    src={imgGame[gameName]}
                    alt={gameName}
                    className="button-img"
                />
            </button>
        )
    });
    return (
        <div className="button-group">{GameButton}</div>
    )
}
export default React.memo(ButtonGames);

