import { ALIGN } from "../object/align.js";
import { Point } from "../object/shapeObject/point.js";
import { DrawProperties } from "./drawProperties.js";

export class ObjectDrawer { // Anything drawn to the canvas is an instance of this
    constructor(drawable, position=Point.ZERO(), properties=new DrawProperties()) {
        this.drawable = drawable;
        this.position = position;
        this.properties = properties;
    }
    
    draw(context) {
        this.drawable.draw(context, this.position, this.properties, ALIGN.CENTRE);
    }
    
}