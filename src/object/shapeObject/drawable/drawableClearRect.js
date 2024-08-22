import { DrawableRect } from "./drawableRect.js";

export class DrawableClearRect extends DrawableRect {
    constructor(width, height) {
        super(width, height)
    }

    draw(context, position, properties) {
        context.clearRect(position.x, position.y, this.width, this.height);
    }
}