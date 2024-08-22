import { QuadtreeMode } from "./quadtreeMode.js";
import { Point } from "../../object/shapeObject/shapeObjectExports.js";
import { getGlobalSettings } from "../../settings/globalSettings.js";
import { ObjectDrawerFPS } from "../../canvas/objectDrawerFPS.js";
import { DrawablePoint } from "../../object/shapeObject/drawable/drawablePoint.js";
import { DrawableRect } from "../../object/shapeObject/drawable/drawableRect.js";
import { ObjectDrawer } from "../../canvas/objectDrawer.js";
import { DrawProperties } from "../../canvas/drawProperties.js";

export class QuadtreePointMode extends QuadtreeMode {

    onStart() {
        let GLOBAL_SETTINGS = getGlobalSettings().canvas;
        this.quadrantPreview = new ObjectDrawer(new DrawableRect(1, 1), new Point(-100, -100), new DrawProperties(GLOBAL_SETTINGS.previewFill))
        this.pointDrawer = new ObjectDrawer(new DrawablePoint(-100, -100), new Point(-100, -100), new DrawProperties(GLOBAL_SETTINGS.previewFill))  
        
        this.display.canvas.drawHandler.drawRequest(new ObjectDrawerFPS(new ObjectDrawer(this.display.quadtreeCanvas)));
        this.display.canvas.drawHandler.drawRequest(new ObjectDrawerFPS(this.quadrantPreview));
        this.display.canvas.drawHandler.drawRequest(new ObjectDrawerFPS(this.pointDrawer));
    }

    onMouseMove(mousePosition) {
        //this.display.quadtreeCanvas.drawHandler.drawRequest(new ObjectDrawer(new DrawableCircle(10), new DrawProperties(new Point(mousePosition.x, mousePosition.y))));
        this.pointDrawer.drawable.x = mousePosition.x;
        this.pointDrawer.drawable.y = mousePosition.y;

        this.pointDrawer.position.x = mousePosition.x;
        this.pointDrawer.position.y = mousePosition.y;


        let previewQuadrant = this.structure.getRegionAtPosition(mousePosition);
        if (previewQuadrant) {
            this.setPreviewQuardrant(previewQuadrant);
        }

        this.display.canvas.drawHandler.refreshDisplay();

    }

    onClick(mousePosition) {
        let obj = new DrawablePoint(mousePosition.x, mousePosition.y);
        let updatedQuadrant = this.structure.addObject(obj);
        if (updatedQuadrant) {
            this.display.quadtreeCanvas.drawHandler.drawRequest(new ObjectDrawer(updatedQuadrant, new Point(updatedQuadrant.position.x, updatedQuadrant.position.y)));
        }

        if (updatedQuadrant !== false) { // null or object
            this.display.quadtreeCanvas.drawHandler.drawRequest(new ObjectDrawer(obj, mousePosition));
        }

        let previewQuadrant = this.structure.getRegionAtPosition(mousePosition);
        if (previewQuadrant) {
            this.setPreviewQuardrant(previewQuadrant);
        }

        this.display.quadtreeCanvas.drawHandler.refreshDisplay();
        this.display.canvas.drawHandler.refreshDisplay();
    }

    setPreviewQuardrant(quadrant) {
        this.quadrantPreview.drawable.width = quadrant.rect.width;
        this.quadrantPreview.drawable.height = quadrant.rect.height;
        this.quadrantPreview.position = quadrant.position;
    }

}