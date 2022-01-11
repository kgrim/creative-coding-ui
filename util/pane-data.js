import { formatString } from "./general-util";

export const params = {
  main: {
    backgroundColor: "#123456",
    width: 1024,
    height: 1024,
    template: "",
    animate: true,
  },
  frequencyGrid: {
    lineCap: "butt",
    noiseType: "3D",
    animationColor: "#48a857ff",
    numberOfColumns: 10,
    numberOfRows: 10,
    scaleMin: 1,
    scaleMax: 30,
    frequency: 0.001,
    amp: 0.2,
  },
  simpleGrid: {
    lineColor: false,
    innerColor: true,
    lineColorValue: "#FFFFFF",
    innerColorValue: "#FFFFFF",
    numberOfColumns: 5,
    numberOfRows: 5,
    lineWidth: 4,
    gap: 5,
  },
};

export const paneData = {
  main: {
    backgroundColor: {},
    width: {},
    height: {},
    template: {
      options: {
        "Frequency Grid": "Frequency Grid",
        "Simple Grid": "Simple Grid",
      },
    },
  },

  frequencyGrid: {
    lineCap: {
      options: { round: "round", square: "sauqre" },
    },
    noiseType: {
      options: { "2D": "2D", "3D": "3D" },
    },
    animationColor: {},
    numberOfColumns: { min: 1, max: 70 },
    numberOfRows: { min: 1, max: 70 },
    scaleMin: { min: 1, max: 100 },
    scaleMax: { min: 1, max: 100 },
    frequency: { min: -0.01, max: 0.01 },
    amp: { min: 0, max: 1 },
  },
  simpleGrid: {
    lineColor: {},
    lineColorValue: {},
    innerColor: {},
    innerColorValue: {},
    numberOfColumns: { min: 1, max: 20, step: 1 },
    numberOfRows: { min: 1, max: 20, step: 1 },
    lineWidth: { min: 0, max: 100, step: 1 },
    gap: { min: 0, max: 20, step: 1 },
  },
};

export const tabTitles = ["Main", "Simple Grid", "Frequency Grid"];
