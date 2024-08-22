import { DrawableFill } from "../object/drawableFill.js";
import { Point } from "../object/shapeObject/point.js";

export class DrawProperties { // Anything that is drawn to the canvas needs this
    constructor(fillColour=null) {
        this.fill = new DrawableFill(fillColour);
    }
}