import { Point } from "../object/shapeObject/point.js";
import { Rect } from "../object/shapeObject/rect.js";
import { Cell } from "./cell.js";

export class Grid { // Unused
    constructor(rect, cellSize) {
        this.rect = rect;
        this.cellSize = cellSize;
        this.setupGrid();
    }

    setupGrid() {
        this.cells = [];
        for (let i = 0; i < this.rect.height; i+=this.cellSize) {
            let toAdd = [];
            for (let j = 0; j < this.rect.width; j+=this.cellSize) {
                this.addCell(toAdd, new Rect(this.cellSize, this.cellSize));
            }
            this.cells.push(toAdd);
        }
    }

    addCell(arr, rect) {
        arr.push(new Cell(rect));
    }
}