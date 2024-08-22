import { DrawableState } from "./drawableState.js";
import { getGlobalSettings } from "../../settings/globalSettings.js";
import { DrawableText } from "../../object/drawableText.js";
import { DrawableCircle } from "../../object/shapeObject/drawable/drawableCircle.js";

export class DrawablePreviewState extends DrawableState {

    constructor() {
        super(new DrawableText("q0"));
    }

    createCircle() {
        this.circleDrawable = new DrawableCircle(getGlobalSettings().FSA.stateRadius);
    }

}
