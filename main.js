const canvasSketch = require("canvas-sketch");

import { createPane } from "./utilities/utilities";

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
  };
};

createPane();

canvasSketch(sketch, settings);
