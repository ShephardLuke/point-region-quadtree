import { BaseObject } from "./baseObject.js";

export class DrawableFill extends BaseObject {
    constructor(colour=null) {
        super();
        this.colour = colour;
    }
    
    draw(context) {
        if (this.colour) {
            context.fillStyle = this.colour.toFillStyle();
            context.fill();
        } 
    }
}