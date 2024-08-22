import { ALIGN } from "../../object/align.js";
import { DrawableCircle } from "../../object/shapeObject/drawable/drawableCircle.js";
import { DrawableRect } from "../../object/shapeObject/drawable/drawableRect.js";
import { Point } from "../../object/shapeObject/point.js";
import { getGlobalSettings } from "../../settings/globalSettings.js";
import { State } from "./state.js";

export class DrawableState extends State {
    constructor(label) {
        super(label);
        this.createShape();
    }

    createShape() {
        this.createCircle();
    }

    createCircle() {
        this.circleDrawable = new DrawableCircle(getGlobalSettings().FSA.stateRadius);

    }
    
    draw(context, position, properties, align=ALIGN.TOP_LEFT) {
        //this.getBoundingRect().draw(context, position, properties);
        let x = position.x;
        let y = position.y;
        if (align === ALIGN.CENTRE) {
            x -= this.circleDrawable.radius;
            y -= this.circleDrawable.radius;
        }
        let pos = new Point(x, y);
        this.circleDrawable.draw(context, pos, properties);
        this.label.draw(context, new Point(pos.x + this.circleDrawable.radius, pos.y + this.circleDrawable.radius), properties);
    }

    getBoundingRect() {
        return new DrawableRect(this.circleDrawable.radius * 2, this.circleDrawable.radius * 2);
    }


}