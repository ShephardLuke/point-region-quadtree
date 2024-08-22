import { DrawProperties } from "../canvas/drawProperties.js";
import { DrawableRect } from "../object/shapeObject/drawable/drawableRect.js";
import { Point } from "../object/shapeObject/point.js";
import { Rect } from "../object/shapeObject/rect.js";
import { PointRegionQuadtree } from "./pointRegionQuadtree.js";

export class pointRegionQuadtreeDrawable extends PointRegionQuadtree {
    constructor(position, rect, bucketSize=1) {
        super(rect, bucketSize, position);
        this.createRect();
    }

    split() {
        let newRect = new Rect(this.rect.width / 2, this.rect.height / 2)
        this.topLeft = new pointRegionQuadtreeDrawable(this.position, newRect, this.bucketSize);
        this.topRight = new pointRegionQuadtreeDrawable(new Point(this.position.x + newRect.width, this.position.y), newRect, this.bucketSize);
        this.bottomLeft = new pointRegionQuadtreeDrawable(new Point(this.position.x, this.position.y + newRect.height), newRect, this.bucketSize);
        this.bottomRight = new pointRegionQuadtreeDrawable(new Point(this.position.x + newRect.width, this.position.y + newRect.height), newRect, this.bucketSize);
    }

    createRect() {
        this.rectDrawable = new DrawableRect(this.rect.width, this.rect.height);
    }

    draw(context, position, properties) {
        this.rectDrawable.draw(context, position, properties);
        if (this.topLeft) {
            this.topLeft.draw(context, position, properties);
            this.topRight.draw(context, new Point(position.x + this.rect.width / 2, position.y), properties);
            this.bottomLeft.draw(context, new Point(position.x, position.y + this.rect.height / 2), properties);
            this.bottomRight.draw(context, new Point(position.x + this.rect.width / 2, position.y + this.rect.height / 2), properties);
        }
    }
}