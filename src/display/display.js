import { InteractiveCanvasElement } from "../canvas/interactive/interactiveCanvasElement.js";
import { ObjectDrawer } from "../canvas/objectDrawer.js";
import { ObjectDrawerFPS } from "../canvas/objectDrawerFPS.js";
import { Point } from "../object/shapeObject/point.js";
import { DivElement } from "../webElement/divElement.js";
import { WebElement } from "../webElement/webElement.js";

export class Display { // Displayed to the page
    constructor(name, mode) {
        
        this.name = name;
        this.name.text = this.name.text + " Display";

        this.divElement = new DivElement(WebElement.BODY);
        
        this.canvas = new InteractiveCanvasElement(this, this.divElement, true, true);

        this.mode = new mode(this);

        this.displayName();

    }

    displayName() {
        this.canvas.drawHandler.drawRequest(new ObjectDrawerFPS(new ObjectDrawer(this.name, new Point(this.canvas.element.width / 2, 30))));
    }
}