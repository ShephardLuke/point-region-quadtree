import { DrawableCanvas } from "../../canvas/drawableCanvas.js";
import { Display } from "../../display/display.js";
import { DrawableText } from "../../object/drawableText.js";
import { QuadtreeMode } from "../mode/quadtreeMode.js";
import { QuadtreePointMode } from "../mode/quadtreePointMode.js";

export class QuadtreeDisplay extends Display {
    constructor() {
        super(new DrawableText("Quadtree (Point-region)"), QuadtreeMode);
        this.mode = this.mode.switchMode(QuadtreeMode);

        this.quadtreeCanvas = new DrawableCanvas(this);


        this.mode = this.mode.switchMode(QuadtreePointMode);
    }
}