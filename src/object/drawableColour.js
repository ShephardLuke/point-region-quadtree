import { ColourObject } from "./colourObject.js";

export class DrawableColour extends ColourObject {
    constructor(red, green, blue, alpha) {
        super(red, green, blue, alpha);
    }

    toFillStyle() {
        return "rgb(" + this.red + " " + this.blue + " " + this.green + " / " + this.alpha + "%)";
    }

    draw(context) {
        context.fillStyle = this.toFillStyle();
    }
}