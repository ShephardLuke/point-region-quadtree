export class Mode {
    constructor(display, structure) {
        this.display = display;
        this.structure = structure;
    }

    switchMode(mode) {
        this.onEnd();
        let newMode = new mode(this.display, this.structure)
        newMode.onStart();
        return newMode;
    }
    
    onStart() {

    }
    
    onClick(id, event) {

    }


    onEnd() {

    }

}