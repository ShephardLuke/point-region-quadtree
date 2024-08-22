import { CanvasMode } from "../../canvas/mode/canvasMode.js";
import { FSA } from "../FSA.js";

export class FSAMode extends CanvasMode {
    constructor(display, structure=new FSA()) {
        super(display, structure)
        this.FSA;
    }

}
