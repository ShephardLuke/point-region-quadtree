import { Point } from "../object/shapeObject/point.js";

export class Quadtree {
    constructor(rect, position = Point.ZERO()) {
        this.bucket = [];

        this.position = position
        this.bucket = null;
        this.rect = rect

        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }
}