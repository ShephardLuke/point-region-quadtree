export class FPSCalculator { // Calculates screen refresh rate and draws any canvas objects in sync with it
 
    static singleton = null;

    static getInstance() {
        if (!FPSCalculator.singleton) {
            FPSCalculator.singleton = new FPSCalculator();
            window.fps = FPSCalculator.singleton;
        }
        return FPSCalculator.singleton;
    }
    
    constructor() {
        this.nativeFPS = 0;
        this.canvasFPS = 0;

        this.accurateFPS = 0;
        this.accurateFPSCounter = 0;

        this.canvasFPSLimit = -1;
        this.canvasTime = 0;

        this.fps = 10;
        this.currentFrame = 0;

        this.requests = [];

        this.timeSinceLastFrame = 0;
        this.lastTime = 0;

        this.secondCounter = 0;

        this.display = null;

        window.requestAnimationFrame(this.frame.bind(this));
    }
 
    frame(timestamp) {
    
        this.timeSinceLastFrame = timestamp - this.lastTime;
        
        if (this.timeSinceLastFrame === 0) {
            window.requestAnimationFrame(this.frame.bind(this));
            return;
        }


        this.lastTime = timestamp;

        this.canvasTime += this.timeSinceLastFrame;


        //console.log(1 / this.timeSinceLastFrame * 1000)


        this.nativeFPS = 1 / this.timeSinceLastFrame * 1000;
        this.canvasFPS = this.canvasFPSLimit;
        if (this.canvasFPSLimit === -1) {
            this.canvasFPS = this.nativeFPS;
        }

        let timeNeeded = 1000 / this.canvasFPS;
        while (this.canvasTime >= timeNeeded) {

            this.secondCounter += timeNeeded;
            if (this.secondCounter >= 1000) {

                this.accurateFPS = this.accurateFPSCounter;
                this.accurateFPSCounter = 1;
                this.refreshDisplay()
                
                this.secondCounter = 0;
            } else {
                this.accurateFPSCounter += 1;
            }

            if (this.requests.length > 0) {
                for (let request of this.requests) {
                    //request.context.canvas.dispatchEvent(new Event("click"));
                    request.draw(this.canvasTime);
                }
                this.requests = [];
            }

            this.canvasTime -= timeNeeded;

        }



        // if (this.timeSinceLastFrame >= 1000) {
        //     console.log(Math.round(this.predictedFPS), this.nativeFPS.FPS)
        //     this.nativeFPS.FPS = this.nativeFPS.currentFrame;
        //     this.nativeFPS.currentFrame = 1;

        //     this.canvasFPS.FPS = this.nativeFPS.FPS;
        //     this.canvasFPS.currentFrame = 1;
        //     this.timeSinceLastFrame = 0;
        // } else {
        //     this.predictedFPS = this.nativeFPS.currentFrame / this.timeSinceLastFrame * 1000;
        //     this.nativeFPS.currentFrame += 1;
        //     let timeNeeded = this.canvasFPS.currentFrame * 1000 / this.canvasFPS.FPS;
            
        //     this.canvasFPS.currentFrame += 1;

        // 

        window.requestAnimationFrame(this.frame.bind(this))


    }

    canvasRequest(canvasElement) {
        if (this.requests.includes(canvasElement)) {
            return;
        }
        this.requests.push(canvasElement);
    }
    
    setDisplay(paragraphElement) {
        this.display = paragraphElement;
        this.refreshDisplay()
    }

    refreshDisplay() {
        if(this.display) {
            this.display.element.innerText = "Canvas FPS: " + Math.floor(this.accurateFPS);
        }
    }

}