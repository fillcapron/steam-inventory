import React from "react";
import { usedTypedSelector } from "../../../hooks/useTypedSelector";

const appImage = {
    '753': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/753/135dc1ac1cd9763dfc8ad52f4e880d2ac058a36c.jpg',
    '440': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/440/033bdd91842b6aca0633ee1e5f3e6b82f2e8962f.ico',
    '730': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/730/d1159d1a4d0e18da4d74f85dbb4934d7a92ace2b.ico',
    '570': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/570/c0d15684e6c186289b50dfe083f5c562c57e8fb6.ico',
    '583950': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/583950/dee44586fb8e07add8b86bfb59c958071d08b0e2.jpg',
    '433850': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/433850/5b84d84ae300bbd409abef5ad0ef09b65383740e.ico',
    '252490': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/252490/acf87ad23570b3c81f8c9cfc19544a07edd8b632.ico',
    '304930': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/304930/7500f9e8568184afab30645d9fb0d18cdb4100fb.ico',
    '218620': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/a6abc0d0c1e79c0b5b0f5c8ab81ce9076a542414.jpg',
    '238460': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/238460/f1e4fa88188fe97c8292b27ff1359e61fdc4bcd7.ico',
    '321360': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/321360/acdedc2593c79f1082355e43744c9aa9efe226bf.ico',
    '232090': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/232090/98ab6d7da74551839cba1896f012f5e7398072a8.ico',
    '322330': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/322330/5176d189ff929acc8d29a2e5f0466e18798db436.ico',
    '578080': 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/578080/ecb8776e4e2b3d962a16b58e1172d5c277a52fa0.ico'
} as IAppObject

const appName = {
    '753': 'Steam',
    '440': 'Team Fortress 2',
    '730': 'CS:GO',
    '570': 'Dota 2',
    '583950': 'Artifact',
    '433850': 'H1Z1: King of the Kill',
    '252490': 'Rust',
    '304930': 'Unturned',
    '218620': 'PAYDAY 2',
    '238460': 'BattleBlock Theater',
    '321360': 'Primal Carnage: Extinction',
    '232090': 'Killing Floor 2',
    '322330': 'Don\'t Starve Together',
    '578080': 'PLAYERUNKNOWN\'S BATTLEGROUNDS'
} as IAppObject

interface IAppObject {
    [app: string]: string
}

const SelectedGame: React.FC = () => {
    const { payload } = usedTypedSelector(state => state.item);
    const { total_items, total_price } = payload;
    const game: string = localStorage.getItem('app')!

    return (
        <div className="selectedGame">
            <img width="64px" height="64px" className="selectedGame-img" src={appImage[game]} alt={appName[game]} />
            <div className="selectedGame-name"><h1>Инвентарь {appName[game]}</h1><p>Всего предметов: <span>{total_items ? total_items : 0}</span></p><p>Стоимость: <span>{total_price ? total_price + ' руб.' : ''}</span></p></div>
        </div>
    )
}

export default React.memo(SelectedGame);