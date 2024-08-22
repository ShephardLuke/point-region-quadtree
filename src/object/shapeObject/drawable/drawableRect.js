import { Rect } from "../rect.js";

export class DrawableRect extends Rect {
    constructor(width, height) {
        super(width, height);
    }

    draw(context, position, properties) {
        context.beginPath();
        context.rect(position.x, position.y, this.width, this.height);
        properties.fill.draw(context);
        context.stroke();
    }

}