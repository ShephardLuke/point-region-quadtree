import { ShapeObject } from "./shapeObject.js";

export class Point extends ShapeObject {
    static ZERO() {
        return new this(0, 0);
    }
    
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
}