import { util } from "../../utils/util";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import { Main, type PartialMapDef } from "./baseDefs";

const mapDef: PartialMapDef = {
    mapId: MapId.WinterDuel,

    desc: {
        name: "Winter Duel (1v1)",
        icon: "img/loot/loot-throwable-snowball.svg",
        buttonCss: "btn-mode-snow",
        buttonText: "Winter Duel (1v1)",
        backgroundImg: "img/main_splash_0_6_10.png",
    },

    assets: {
        audio: [
            { name: "plane_02", channel: "sfx" },
            { name: "bells_01", channel: "ui" },
        ],
        atlases: ["gradient", "loadout", "shared", "snow"],
    },

    biome: {
        colors: {
            background: 0x0d1a2e,
            water: 0x0a1520,
            waterRipple: 0x5ba3bf,
            beach: 0x8a7d6a,
            riverbank: 0x4a3c2e,
            grass: 0x7a8c9e,
            underground: 0x0a0806,
            playerSubmerge: 0x1a5c78,
            playerGhillie: 0x7a8c9e,
        },

        valueAdjust: 1,
        sound: { riverShore: "sand" },
        tracerColors: {},

        particles: {
            camera: "falling_snow_fast",
        },

        airdrop: {
            planeImg: "map-plane-01x.img",
            planeSound: "plane_02",
            airdropImg: "map-chute-01x.img",
        },

        frozenSprites: [
            "player-snow-01.img",
            "player-snow-02.img",
            "player-snow-03.img",
        ],
    },

    gameMode: {
        maxPlayers: 2,
        killLeaderEnabled: false,
    },

    /* STRIP_FROM_PROD_CLIENT:START */

    gameConfig: {
        planes: {
            timings: [],
            crates: [],
        },
        bagSizes: {},
        bleedDamage: 2,
        bleedDamageMult: 1,
    },

    // Inherit Main loot table automatically
    lootTable: {},

    mapGen: {
        map: {
            baseWidth: 125,
            baseHeight: 125,

            scale: { small: 1, large: 1 },

            extension: 10,
            shoreInset: 10,
            grassInset: 6,

            rivers: {
                lakes: [],
                weights: [],
                smoothness: 0,
                spawnCabins: false,
                masks: [],
            },
        },

        places: [],

        bridgeTypes: {
            medium: "",
            large: "",
            xlarge: "",
        },

        customSpawnRules: {
            locationSpawns: [],
            placeSpawns: [],
        },

        densitySpawns: [
            {
                barrel_01: 4,
                tree_10: 3,
                hedgehog_01: 3,
            },
        ],

        fixedSpawns: [{}],
        randomSpawns: [],
        spawnReplacements: [{}],
        importantSpawns: [],
    },

    /* STRIP_FROM_PROD_CLIENT:END */
};

export const WinterDuel = util.mergeDeep({}, Main, mapDef) as MapDef;
