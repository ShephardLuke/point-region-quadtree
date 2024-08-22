import { WebElement } from "./webElement.js";

export class DivElement extends WebElement {
    constructor(parentElement) {
        super(document.createElement("div"));
        this.insertElementInto(parentElement);
    }
}