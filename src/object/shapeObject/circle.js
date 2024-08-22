import { ShapeObject } from "./shapeObject.js";

export class Circle extends ShapeObject {
    constructor(radius) {
        super();
        this.radius = radius;
    }
}