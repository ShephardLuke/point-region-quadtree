import { Point } from "../point.js";

export class DrawablePoint extends Point {
    constructor(x, y) {
        super(x, y);
    }

    draw(context, position, properties) {
        let radius = 5;
        context.beginPath();
        context.arc(position.x, position.y, radius, 0, 2 * Math.PI);
        properties.fill.draw(context);
        context.stroke();
    }
}