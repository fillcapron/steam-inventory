import React, { useEffect, useState } from "react";
import { imgGame, GameAppId } from "./types";

const ButtonGames: React.FC = () => {
    const [app, setApp] = useState<string | undefined>(localStorage.getItem('app') || '');
    const games = ['STEAM', 'TF2', 'CSGO', 'DOTA2', 'ARTIFACT', 'H1Z1', 'RUST', 'UNTURNED', 'PAYDAY2', 'BBT', 'PC', 'KF2', 'DST', 'PUBG'];

    useEffect(() => {
        localStorage.setItem('app', app || '');
    }, [app]);

    console.log('Button')
    
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
        <div>{GameButton}</div>
    )
}
export default React.memo(ButtonGames);