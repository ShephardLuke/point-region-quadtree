import { Mode } from "../../mode/mode.js";


export class CanvasMode extends Mode { // Different modes that can be used to make the canvas do different things
    constructor(display, structure) {
        super(display, structure);
    }


    onClick(webElement, event) {

    }

    onMouseMove(canvasElement, event) {

    }

    draw(interactiveDrawable) {
        interactiveDrawable.draw(this.display.canvas.context, this.display.canvas.drawHandler.FPSCalculator);
    }
}