import { WebElement } from "../webElement/webElement.js";
import { getGlobalSettings } from "../settings/globalSettings.js";
import { CanvasDrawHandler } from "./drawHandler/canvasDrawHandler.js";
import { Point, Rect } from "../object/shapeObject/shapeObjectExports.js";

class CanvasElement extends WebElement {
    constructor(display, parentElement=null) {
        super(document.createElement("canvas"), display);

        this.parentElement = parentElement;

        this.setup();

    }   

    setup() {
        this.setupElement();
        this.insertElementInto(this.parentElement);
    }

    setupElement() {
        let SETTINGS = getGlobalSettings().canvas;
        this.element.width = SETTINGS.width;
        this.element.height = SETTINGS.height;
        this.setupDrawHandler();
    }

    setupDrawHandler() {
        this.drawHandler = new CanvasDrawHandler(this);
    }

    createEventListener(name, func) {
        this.element.addEventListener(name, func);
    }

    getRect() {
        return new Rect(this.element.width, this.element.height);
    }


}

export { CanvasElement };