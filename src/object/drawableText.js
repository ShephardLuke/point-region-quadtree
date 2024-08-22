import { TextObject } from "./TextObject.js";
import { Point } from "./shapeObject/shapeObjectExports.js";
import { getGlobalSettings } from "../settings/globalSettings.js";

export class DrawableText extends TextObject {
    constructor(text) {
        super(text)
    }

    draw(context, position, properties) {
        context.font = getGlobalSettings().canvas.font;
        context.textAlign = "center";

        context.beginPath();
        context.fillStyle = "black";
        let textPosition = new Point(position.x, position.y + parseInt(getGlobalSettings().canvas.font) / 4);
        context.fillText(this.text, textPosition.x, textPosition.y);
    }

}