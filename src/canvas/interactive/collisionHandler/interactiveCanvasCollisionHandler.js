import { DrawableGrid } from "../../../grid/drawableGrid.js";
import { getGlobalSettings } from "../../../settings/globalSettings.js";
import { DrawableCanvas } from "../../drawableCanvas.js";
import { ObjectDrawer } from "../../objectDrawer.js";

export class InteractiveCanvasCollisionHandler { // Unused, was going to detect collisions using a grid
    constructor(canvas) {
        this.canvas = canvas;
        this.grid = new DrawableGrid(this.canvas.getRect(), getGlobalSettings().grid.cellSize);
        let gridCanvas = new DrawableCanvas(null);
        let gridDrawer = new ObjectDrawer(gridCanvas);

        gridCanvas.drawHandler.drawRequest(new ObjectDrawer(this.grid));
        
        if (getGlobalSettings().grid.showGrid) {
            //this.canvas.drawHandler.drawRequest(new ObjectDrawerFPS(gridDrawer));
        }

    }

    checkCollision(mousePosition) {

    }

    checkDrawableCollision(drawable) {
        let tempQuadTree = structuredClone(this.quadTree);

        console.log(tempQuadTree.addObject(drawable));
    }

    addToWorld(object) {
        console.log(getBoundingRect)
    }
}