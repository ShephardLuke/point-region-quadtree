import { Circle } from "../circle.js";

export class DrawableCircle extends Circle {
    constructor(radius) {
        super(radius);

    }

    draw(context, position, properties) {
        context.beginPath();
        context.arc(position.x + this.radius, position.y + this.radius, this.radius, 0, 2 * Math.PI);
        properties.fill.draw(context);
        context.fillStyle = "black";
        context.stroke();
    }

}