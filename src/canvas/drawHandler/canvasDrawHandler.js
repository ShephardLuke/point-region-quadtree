import { FPSCalculator } from "../../FPS/FPSCalculator.js";
import { ObjectDrawer } from "../objectDrawer.js";

export class CanvasDrawHandler { // Drawing onto the canvas
    constructor(canvas) {
        this.FPSCalculator = FPSCalculator.getInstance();
        this.setupConext(canvas);
        this.requests = [];
    }

    
    setupConext(canvas) {
        this.context = canvas.element.getContext("2d");
    }

    drawRequest(object) { // When an ObjectDrawer wants to be drawn, it sends this request
        if (!(object instanceof ObjectDrawer)) {
            console.error(object.constructor.name + " not instance of ObjectDrawer!")
            return;
        }
        this.requests.push(object);
    }

    refreshDisplay() {
        this.FPSCalculator.canvasRequest(this);
    }

    draw(timestamp) {
        for (let request of this.requests) {
            request.draw(this.context);
        }

        this.requests = [];

    }
}