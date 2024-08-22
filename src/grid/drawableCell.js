import { DrawableRect } from "../object/shapeObject/drawable/drawableRect.js";
import { Cell } from "./cell.js";

export class DrawableCell extends Cell {
    constructor(rect) {
        super(rect);
        this.drawableRect = new DrawableRect(rect.width, rect.height);
    }

    draw(context, position, properties) {
        this.drawableRect.draw(context, position, properties);
    }
}