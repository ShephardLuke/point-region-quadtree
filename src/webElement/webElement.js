import { BaseObject } from "../object/baseObject.js";


export class WebElement extends BaseObject {

    static BODY = new function() {
        return new WebElement(document.body)
    }

    constructor(element, display=null) {
        super();
        this.element = element
        this.display = display;
    }

    insertElementInto(parentElement=null) {
        if (!parentElement) {
            return;
        }
        parentElement.element.appendChild(this.element);
    }

    insertElementBefore(parentElement, element) {
        parentElement.insertBefore(this.element, element);
    }
}
