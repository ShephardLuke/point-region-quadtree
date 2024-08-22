import { Point } from "../object/shapeObject/point.js";
import { Rect } from "../object/shapeObject/rect.js";
import { Quadtree } from "./quadtree.js";
import { RegionQuadtree } from "./regionQuadtree.js";

export class PointRegionQuadtree extends RegionQuadtree {
    constructor(rect,  bucketSize=1, position=Point.ZERO()) {
        super(rect, position)
        this.bucket = [];
        this.bucketSize = bucketSize;
    }

    addObject(object) {
        if (this.topLeft) {
            return this.insertObjectAtQuadrant(object);
        } else {
            if (this.bucket.length < this.bucketSize) {
                this.bucket.push(object);
                return null;
            }
            else {
                for (let obj of this.bucket) {
                    if (obj.x == object.x && obj.y == object.y) {
                        return false;
                    }
                    if (!this.topLeft) {
                        this.split();
                    }
                    this.insertObjectAtQuadrant(obj);
                }


                this.bucket = [];
                this.insertObjectAtQuadrant(object);

                return this;
            }
        }
    }

    split() {
        let newRect = new Rect(this.rect.width / 2, this.rect.height / 2)
        this.topLeft = new Quadtree(newRect, this.position, this.bucketSize);
        this.topRight = new Quadtree(newRect, new Point(this.position.x + newRect.width, this.position.y), this.bucketSize);
        this.bottomLeft = new Quadtree(newRect, new Point(this.position.x, this.position.y + newRect.height), this.bucketSize);
        this.bottomRight = new Quadtree(newRect, new Point(this.position.x + newRect.width, this.position.y + newRect.height), this.bucketSize);
    }

    insertObjectAtQuadrant(object) {
        let quadrant = this.getQuadrantAtPosition(object)
        if (quadrant) {
            return quadrant.addObject(object);
        }
        return quadrant;
    }

    
}