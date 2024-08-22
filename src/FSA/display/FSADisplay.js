import { Display } from "../../display/display.js";
import { FSAMode } from "../mode/FSAMode.js";
import { FSAAddStatesMode } from "../mode/FSAAddStatesMode.js";
import { DrawableCanvas } from "../../canvas/drawableCanvas.js";   
import { DrawableText } from "../../object/drawableText.js";

export class FSADisplay extends Display { // Unfinished
    constructor() {
        super(new DrawableText("FSA"), FSAMode);
        this.FSACanvas = new DrawableCanvas(this);
        this.mode = this.mode.switchMode(FSAAddStatesMode);
        // this.AnimationInterface = new FSACanvasInterface(this.divElement.element, 1, true, this.mode);
    }
}