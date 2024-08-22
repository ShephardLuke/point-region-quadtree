import { CanvasMode } from "../../canvas/mode/canvasMode.js";
import { Point } from "../../object/shapeObject/point.js";
import { pointRegionQuadtreeDrawable } from "../pointRegionQuadtreeDrawable.js";

export class QuadtreeMode extends CanvasMode {
    constructor(display, structure=null) {
        super(display, structure)
        this.structure = new pointRegionQuadtreeDrawable(new Point(0, 0), this.display.canvas.getRect())
    }

}
