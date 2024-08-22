import { FPSCalculator } from "../FPS/FPSCalculator.js";

export class ObjectDrawerFPS { // For an interactiveCanvas, takes an objectDrawer and makes it refresh X times per second
    constructor(objectDrawer, perSecond=-1) {
        this.objectDrawer = objectDrawer;
        this.perSecond = perSecond;
        this.totalTime = 0;
        this.lastTime = 0;
    }

    draw(context, timeSinceLastFrame) {
        if (this.perSecond === -1) {
            this.objectDrawer.draw(context);
        } else {
            let canvasFPS = FPSCalculator.getInstance().canvasFPS;
            // if (Math.round(FPS) > canvasFPS) {
            //     FPS = canvasFPS
            // }

            this.totalTime += timeSinceLastFrame;
    
            let timeNeeded = 1000 / this.perSecond;

            if (this.perSecond > Math.round(canvasFPS)) {
                timeNeeded = (this.perSecond / canvasFPS) * 1000
                console.log(timeNeeded);
            }
    
            if (Math.round(this.totalTime) >= timeNeeded) {
                this.objectDrawer.draw(context);
                this.totalTime = 0;
            }
        }  
    }
}