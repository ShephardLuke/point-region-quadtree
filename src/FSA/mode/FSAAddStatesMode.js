import { getGlobalSettings } from "../../settings/globalSettings.js";
import { DrawablePreviewState } from "../state/drawablePreviewState.js";
import { DrawableState } from "../state/drawableState.js";
import { FSAMode } from "./FSAMode.js";
import { DrawableText } from "../../object/drawableText.js";
import { Point } from "../../object/shapeObject/shapeObjectExports.js";
import { ObjectDrawerFPS } from "../../canvas/objectDrawerFPS.js";
import { ObjectDrawer } from "../../canvas/objectDrawer.js";
import { DrawProperties } from "../../canvas/drawProperties.js";
import { DrawableColour } from "../../object/drawableColour.js";

export class FSAAddStatesMode extends FSAMode {


    onStart() {
        this.previewStateDrawable = new ObjectDrawer(new DrawablePreviewState(), new Point(-100, -100), new DrawProperties(getGlobalSettings().canvas.previewFill));
        
        this.display.canvas.drawHandler.drawRequest(new ObjectDrawerFPS(new ObjectDrawer(this.display.FSACanvas)));
        this.display.canvas.drawHandler.drawRequest(new ObjectDrawerFPS(this.previewStateDrawable));
    }

    onClick(mousePosition) {
        this.addState(mousePosition);
    }

    onMouseMove(mousePosition) {
        this.updatePreviewState(mousePosition);
    }

    addState(mousePosition) {
        let label = "??";
        let previewLabel = "??";
        if (getGlobalSettings().FSA.autoName) {
            label = "q" + this.structure.states.length;
            previewLabel = "q" + (this.structure.states.length + 1);
        }
        this.previewStateDrawable.drawable.label.text = previewLabel;
        let state = new DrawableState(new DrawableText(label))
        this.structure.addState(state);
        this.display.FSACanvas.drawHandler.drawRequest(new ObjectDrawer(state, mousePosition, new DrawProperties(new DrawableColour(255, 255, 255))));
        
        this.display.FSACanvas.drawHandler.refreshDisplay();
        this.display.canvas.drawHandler.refreshDisplay();
        
    }

    updatePreviewState(mousePosition) {
        this.previewStateDrawable.position.x = mousePosition.x;
        this.previewStateDrawable.position.y = mousePosition.y;

        this.display.canvas.drawHandler.refreshDisplay();
    }
    
}

