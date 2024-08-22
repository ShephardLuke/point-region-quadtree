import { WebElement } from "./webElement.js";

export class ParagraphElement extends WebElement {
    constructor(text="") {
        super(document.createElement("p"));
        this.element.innerHTML = text;
    }
}
