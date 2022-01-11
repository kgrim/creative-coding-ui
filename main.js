const canvasSketch = require("canvas-sketch");

import { createPane } from "./util/tweak-pane-util";
import { params } from "./util/pane-data";

//methods
("Frequency Grid");
import { SimpleGrid } from "./methods/simple-grid";
import { FrequencyGrid } from "./methods/frequency-grid";

const settings = {
  dimensions: [1024, 1024],
  animate: true,
  hotkeys: true,
  resizeCanvas: true,
};

const sketch = ({ canvas }) => {
  return {
    render({ context, width, height, frame }) {
      context.fillStyle = params["main"].backgroundColor;
      context.fillRect(0, 0, width, height);

      switch (params["main"].template) {
        case "Simple Grid":
          return SimpleGrid({ context, width, height });
          break;

        case "Frequency Grid":
          return FrequencyGrid({ context, width, height, frame });
          break;

        default:
          return;
          break;
      }
    },
  };
};

createPane();
canvasSketch(sketch, settings);
