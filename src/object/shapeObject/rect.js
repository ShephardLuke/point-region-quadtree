import { ShapeObject } from "./shapeObject.js";

export class Rect extends ShapeObject {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}