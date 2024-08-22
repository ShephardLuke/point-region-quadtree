import { CanvasElement } from "./canvasElement.js";

export class DrawableCanvas extends CanvasElement {
    constructor(display, parentElement=null) {
        super(display, parentElement);
    }

    draw(context, position, properties) {
        context.drawImage(this.element, position.x, position.y);
    }
}