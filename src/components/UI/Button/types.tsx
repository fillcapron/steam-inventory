export const imgGame = {
    'Steam' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/753/135dc1ac1cd9763dfc8ad52f4e880d2ac058a36c.jpg',
    'Team Fortress 2' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/440/033bdd91842b6aca0633ee1e5f3e6b82f2e8962f.ico',
    'CS:GO' :'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/730/d1159d1a4d0e18da4d74f85dbb4934d7a92ace2b.ico',
    'Dota 2' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/570/c0d15684e6c186289b50dfe083f5c562c57e8fb6.ico',
    'Artifact' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/583950/dee44586fb8e07add8b86bfb59c958071d08b0e2.jpg',
    'H1Z1: King of the Kill' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/433850/5b84d84ae300bbd409abef5ad0ef09b65383740e.ico',
    'Rust' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/252490/acf87ad23570b3c81f8c9cfc19544a07edd8b632.ico',
    'Unturned' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/304930/7500f9e8568184afab30645d9fb0d18cdb4100fb.ico',
    'PAYDAY 2' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/218620/a6abc0d0c1e79c0b5b0f5c8ab81ce9076a542414.jpg',
    'BattleBlock Theater' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/238460/f1e4fa88188fe97c8292b27ff1359e61fdc4bcd7.ico',
    'Primal Carnage: Extinction' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/321360/acdedc2593c79f1082355e43744c9aa9efe226bf.ico',
    'Killing Floor 2' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/232090/98ab6d7da74551839cba1896f012f5e7398072a8.ico',
    'Don\'t Starve Together' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/322330/5176d189ff929acc8d29a2e5f0466e18798db436.ico',
    'PLAYERUNKNOWN\'S BATTLEGROUNDS' : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/578080/ecb8776e4e2b3d962a16b58e1172d5c277a52fa0.ico'
} as IGameName

export const GameAppId = {
    'Steam'  : '753',
    'Team Fortress 2' : '440',
    'CS:GO' :'730',
    'Dota 2' : '570',
    'Artifact' : '583950',
    'H1Z1: King of the Kill' : '433850',
    'Rust' : '252490',
    'Unturned' : '304930',
    'PAYDAY 2' : '218620',
    'BattleBlock Theater' : '238460',
    'Primal Carnage: Extinction' : '321360',
    'Killing Floor 2' : '232090',
    'Don\'t Starve Together' : '322330',
    'PLAYERUNKNOWN\'S BATTLEGROUNDS' : '578080'
} as IGameName

export interface IGameName {
    [game: string]: string;
}
