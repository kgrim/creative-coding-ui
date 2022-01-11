import { formatString } from "./general-util";

export const params = {
  main: {
    backgroundColor: "#000000",
    width: 1024,
    height: 1024,
    template: "",
    animate: true,
  },
  paneTest: {
    lineCap: "butt",
    animateColor: "#48a857ff",
    cols: 10,
    rows: 10,
    scaleMin: 1,
    scaleMax: 30,
    freq: 0.001,
    amp: 0.2,
    frame: 0,
    animate: true,
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
        simpleGrid: "Simple Grid",
        main: "Main",
      },
    },
    animate: {},
  },

  paneTest: {
    lineCap: {
      options: { round: "round", square: "sauqre" },
    },
    animateColor: {},
    cols: { min: 1, max: 10 },
    rows: { min: 1, max: 10 },
    scaleMin: { min: 1, max: 100 },
    scaleMax: { min: 1, max: 100 },
    freq: { min: -0.01, max: 0.01 },
    amp: { min: 0, max: 1 },
    animate: {},
    frame: { min: 0, max: 999 },
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

export const tabTitles = ["Main", "Simple Grid"];
