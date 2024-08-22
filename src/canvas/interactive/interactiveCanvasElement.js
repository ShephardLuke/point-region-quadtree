import { InteractiveCanvasDrawHandler } from "./drawHandler/interactiveCanvasDrawHandler.js";
import { CanvasElement } from "../canvasElement.js";
import { InteractiveCanvasCollisionHandler } from "./collisionHandler/interactiveCanvasCollisionHandler.js";
import { Point } from "../../object/shapeObject/point.js";

export class InteractiveCanvasElement extends CanvasElement { // A canvas which refreshes in sync with the refresh rate of the user's screen
    constructor(display, parentElement=null, click=false, mouseMove=false) {
        super(display, parentElement);
        this.createEventListeners(click, mouseMove);
        this.setupCollisionHandler();
    }

    createEventListeners(click, mouseMove) {  
        if (click) {
            this.element.addEventListener("click", this.onClick.bind(this));
        }
        if (mouseMove) {
            this.element.addEventListener("mousemove", this.onMouseMove.bind(this));
        }
    }

    setupCollisionHandler() { // Unused
        this.collisionHandler = new InteractiveCanvasCollisionHandler(this);
    }

    setupDrawHandler() {
        this.drawHandler = new InteractiveCanvasDrawHandler(this);
    }

    onClick(event) {
        let mousePosition = this.getMousePosition(event);
        this.display.mode.onClick(mousePosition);
    }

    onMouseMove(event) {
        let mousePosition = this.getMousePosition(event);
        this.display.mode.onMouseMove(mousePosition);
    }

    getMousePosition(event) {
        const rect = this.element.getBoundingClientRect();
    
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
    
        return new Point(x, y);
    }
}