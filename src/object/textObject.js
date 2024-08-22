import { BaseObject } from "./baseObject.js";

export class TextObject extends BaseObject{
    constructor(text) {
        super();
        this.text = text;
    }
}