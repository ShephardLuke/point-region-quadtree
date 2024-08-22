import { CANVAS_SETTINGS } from "./canvasSettings.js";
import { FSA_SETTINGS } from "./FSASettings.js";
import { GRID_SETTINGS } from "./gridSettings.js";

let singleton = null;

export function getGlobalSettings() {
    if (singleton) {
        return singleton;
    } else {
        singleton = new GLOBAL_SETTINGS();
        return singleton;
    }
}

class GLOBAL_SETTINGS {
    constructor() {
        this.canvas = CANVAS_SETTINGS;
        this.FSA = FSA_SETTINGS;
        this.grid = GRID_SETTINGS;
    }
}