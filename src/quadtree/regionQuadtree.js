import { Point } from "../object/shapeObject/point.js";
import { Quadtree } from "./quadtree.js";

// Unfinished still acts like a PR quadtree
export class RegionQuadtree extends Quadtree  { // Splits objects into quadrants depending on postion
    constructor(rect, position = Point.ZERO()) {
        super(rect, position);
    }

    addObject(object) {
        if (this.topLeft) {
            return this.insertObjectintoQuadrant(object);
        } else {
            if (this.bucket) {
                if (obj.position.x == object.position.x && obj.position.y == object.position.y) {
                    return false;
                }
                this.split();
                this.insertObjectintoQuadrant(obj);


                this.bucket = [];
                this.insertObjectintoQuadrant(object);

                return this;
            }
            else {
                this.bucket = object;
                return null;
            }
        }
    }

    split() {
        let newRect = new Rect(this.rect.width / 2, this.rect.height / 2)
        this.topLeft = new Quadtree(newRect, this.position);
        this.topRight = new Quadtree(newRect, new Point(this.position.x + newRect.width, this.position.y));
        this.bottomLeft = new Quadtree(newRect, new Point(this.position.x, this.position.y + newRect.height));
        this.bottomRight = new Quadtree(newRect, new Point(this.position.x + newRect.width, this.position.y + newRect.height));
    }

    insertObjectintoQuadrant(object) {
        let position = object.position;
        let quadrant = this.getQuadrantAtPosition(position)
        if (quadrant) {
            return quadrant.addObject(object);
        }
        return quadrant;
    }

    getQuadrantAtPosition(position) {
        if (position.y < this.bottomLeft.position.y) {
            if (position.x < this.topRight.position.x) {
                return this.topLeft;
            } else if (position.x < this.topRight.position.x + this.topRight.rect.width) {
                return this.topRight;
            }
        } else if (position.y < this.bottomLeft.position.y + this.bottomLeft.rect.height) {
            if (position.x < this.bottomLeft.position.x + this.bottomLeft.rect.width) {
                return this.bottomLeft;
            } else {
                return this.bottomRight;
            }
        }
        return false;
    }

    getRegionAtPosition(position) {
        if (!this.topLeft) {
            return this;
        }
        let quadrant = this.getQuadrantAtPosition(position);
        if (quadrant) {
            return quadrant.getRegionAtPosition(position);
        }
        return false
    }
}