import { params } from "../util/pane-data";

export const SimpleGrid = ({ context, width, height }) => {
  const {
    numberOfColumns,
    numberOfRows,
    lineWidth,
    gap,
    lineColor,
    lineColorValue,
    innerColor,
    innerColorValue,
  } = params["simpleGrid"];

  context.lineWidth = width * (lineWidth / 1000);

  const calculatedGap = width * (gap / 1000);
  const pixelWidth = width / (numberOfColumns + calculatedGap);
  const pixelHeight = height / (numberOfRows + calculatedGap);

  const halfInnerBoxWidth = (pixelWidth + gap) * numberOfColumns * 0.5;
  const halfInnerBoxHeight = (pixelHeight + gap) * numberOfRows * 0.5;
  const centerX = width * 0.5 - halfInnerBoxWidth;

  const centerY = width * 0.5 - halfInnerBoxHeight;

  let x, y;

  for (
    let currentColumn = 0;
    currentColumn < numberOfColumns;
    currentColumn++
  ) {
    for (let currentRow = 0; currentRow < numberOfRows; currentRow++) {
      x = centerX + (pixelWidth + gap) * currentColumn;
      y = centerY + (pixelHeight + gap) * currentRow;
      context.save();

      context.beginPath();

      if (lineColor) {
        context.strokeStyle = lineColorValue;
        context.rect(x, y, pixelWidth, pixelHeight);
        context.stroke();
      }
      if (innerColor) {
        context.fillStyle = innerColorValue;
        context.fillRect(x, y, pixelWidth, pixelHeight);
        context.stroke();
      }
    }
    context.restore();
  }
};
