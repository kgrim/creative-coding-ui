const canvasSketch = require("canvas-sketch");

import { createPane } from "./util/tweak-pane-util";
import { params } from "./util/pane-data";

//methods
import { SimpleGrid } from "./methods/simple-grid";

const settings = {
  dimensions: [1024, 1024],
  animate: true,
  hotkeys: true,
  resizeCanvas: true,
};

const sketch = ({ canvas, update }) => {
  return {
    render({ context, width, height, frame, pause, play }) {
      context.fillStyle = params["main"].backgroundColor;
      context.fillRect(0, 0, width, height);

      switch (params["main"].template) {
        case "Simple Grid":
          return SimpleGrid({ context, width, height });
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
