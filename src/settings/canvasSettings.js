import { DrawableColour } from "../object/drawableColour.js";

export const CANVAS_SETTINGS = {
    "width": Math.floor((window.innerWidth - 2) / 50) * 50,
    "height": Math.floor((window.innerHeight - 60) / 50) * 50,
    "font": "25px arial",
    "previewFill": new DrawableColour(210,210,210,50)
};