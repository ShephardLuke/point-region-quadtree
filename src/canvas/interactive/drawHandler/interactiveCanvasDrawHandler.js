import { CanvasDrawHandler } from "../../drawHandler/canvasDrawHandler.js";
import { DrawableRect } from "../../../object/shapeObject/drawable/drawableRect.js";
import { Point } from "../../../object/shapeObject/shapeObjectExports.js";
import { DrawableColour } from "../../../object/drawableColour.js";
import { ObjectDrawerFPS } from "../../objectDrawerFPS.js";
import { ObjectDrawer } from "../../objectDrawer.js";
import { DrawProperties } from "../../drawProperties.js";

export class InteractiveCanvasDrawHandler extends CanvasDrawHandler { // 
    constructor(canvas) {
        super(canvas);
        
        let clearRect = new DrawableRect(canvas.element.width, canvas.element.height);
        let clearRectDrawer = new ObjectDrawer(clearRect, Point.ZERO(), new DrawProperties(new DrawableColour(255,255,255)));
        this.clearDisplay = new ObjectDrawerFPS(clearRectDrawer)
        this.drawRequest(this.clearDisplay);

        this.FPSCalculator.canvasRequest(this);


    }



    drawRequest(object) {
        if (!(object.objectDrawer instanceof ObjectDrawer)) {
            console.error(object.objectDrawer.constructor.name + " not instance of ObjectDrawerFPS.ObjectDrawer!")
            return;
        }
        this.requests.push(object);
    }

    draw(timestamp) {        
        for (let request of this.requests) {
            request.draw(this.context, timestamp);
        }

    }
}