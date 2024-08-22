import { getGlobalSettings } from "./settings/globalSettings.js";
import { FSADisplay } from "./FSA/display/FSADisplay.js";
import "./style.css";
import { QuadtreeDisplay } from "./quadtree/display/quadTreeDisplay.js";
import { FPSCalculator } from "./FPS/FPSCalculator.js";
import { ParagraphElement } from "./webElement/paragraphElement.js";


window.GLOBAL_SETTINGS = new getGlobalSettings();

let fpsDisplay = new ParagraphElement();
document.body.appendChild(fpsDisplay.element);
FPSCalculator.getInstance().setDisplay(fpsDisplay);

new QuadtreeDisplay();
