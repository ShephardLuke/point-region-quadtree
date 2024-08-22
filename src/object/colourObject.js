import { BaseObject } from "./baseObject.js";

export class ColourObject extends BaseObject {
    constructor(red, green, blue, alpha=100) {
        super();
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
}