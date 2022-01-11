const canvasSketch = require("canvas-sketch");

import { createPane } from "./util/tweak-pane-util";
import { params } from "./util/pane-data";

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
    },
  };
};

createPane();
canvasSketch(sketch, settings);
