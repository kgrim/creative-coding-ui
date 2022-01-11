import { params } from "../util/pane-data";

const random = require("canvas-sketch-util/random");
const math = require("canvas-sketch-util/math");

export const FrequencyGrid = ({ context, width, height, frame }) => {
  const {
    lineCap,
    animationColor,
    numberOfRows,
    numberOfColumns,
    scaleMin,
    scaleMax,
    frequency,
    amp,
    noiseType,
  } = params["frequencyGrid"];

  context.fillStyle = params["main"].backgroundcolumnor;
  context.fillRect(0, 0, width, height);

  const columns = numberOfColumns;
  const rows = numberOfRows;
  const numCells = columns * rows;

  const gridWidth = width * 0.8;
  const gridHeight = height * 0.8;

  const cellWidth = gridWidth / columns;
  const cellHeight = gridHeight / rows;
  const margX = (width - gridWidth) * 0.5;
  const margY = (height - gridHeight) * 0.5;

  for (let index = 0; index < numCells; index++) {
    const column = index % columns;
    const row = Math.floor(index / columns);

    const x = column * cellWidth + margX + cellWidth * 0.5;
    const y = row * cellHeight + margY + cellHeight * 0.5;
    const w = cellWidth * 0.8;
    const h = cellHeight * 0.8;
    const f = frame;

    const noise =
      noiseType === "3D"
        ? random.noise3D(x, y, f * 10, frequency)
        : random.noise2D(x + frame * 10, y, frequency);

    const angle = noise * Math.PI * amp;
    const scale = math.mapRange(noise, -1, 1, scaleMin, scaleMax);

    context.save();

    context.translate(x, y);
    context.rotate(angle);

    context.strokeStyle = animationColor;
    context.lineWidth = scale;
    context.lineCap = lineCap;

    context.beginPath();
    context.moveTo(w * -0.5, 0);
    context.lineTo(w * 0.5, 0);
    context.stroke();

    context.restore();
  }
};
