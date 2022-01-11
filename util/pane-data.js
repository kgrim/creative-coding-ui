export const tabTitles = ["Main", "Pane Test"];

export const params = {
  main: {
    backgroundColor: "#22aaeeff",
    width: 1024,
    height: 1024,
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
};

export const paneData = {
  main: {
    backgroundColor: { view: "inline" },
    width: {},
    height: {},
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
};
