import { DrawProperties } from "../canvas/drawProperties.js";
import { Point } from "../object/shapeObject/point.js";
import { DrawableCell } from "./drawableCell.js";
import { Grid } from "./grid.js";

export class DrawableGrid extends Grid { // Unused
    constructor(rect, cellSize) {
        super(rect, cellSize);
    }

    draw(context, position, properties) {
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                this.cells[i][j].draw(context, new Point(j * this.cellSize, i * this.cellSize), properties);
            }
        }
    }

    addCell(arr, rect) {
        arr.push(new DrawableCell(rect));
    }
}