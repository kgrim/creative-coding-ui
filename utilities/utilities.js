const Tweakpane = require("tweakpane");

const params = {
  cols: 10,
  rows: 10,
  scaleMin: 1,
  scaleMax: 30,
  freq: 0.001,
  amp: 0.2,
  frame: 0,
  animate: true,
  lineCap: "butt",
};

const tabNames = ["Grid", "Noise"];

export const createPane = () => {
  const pane = new Tweakpane.Pane();
  const Tab = pane.addTab({
    pages: tabNames.map((tabName) => {
      return {
        title: tabName,
      };
    }),
  });

  Tab.pages[0].addInput(params, "lineCap", {
    options: { butt: "butt", round: "round", square: "sauqre" },
  });
  Tab.pages[0].addInput(params, "cols", { min: 2, max: 50, step: 1 });
  Tab.pages[0].addInput(params, "rows", { min: 2, max: 50, step: 1 });
  Tab.pages[0].addInput(params, "scaleMin", { min: 1, max: 100 });
  Tab.pages[0].addInput(params, "scaleMax", { min: 1, max: 100 });

  Tab.pages[1].addInput(params, "freq", { min: -0.01, max: 0.01 });
  Tab.pages[1].addInput(params, "amp", { min: 0, max: 1 });
  Tab.pages[1].addInput(params, "animate");
  Tab.pages[1].addInput(params, "frame", { min: 0, max: 999 });
};

// const addInput = (name = "", { min, max, step, options }) => {
//   return addInput(params, name, { min, max, step, options });
// };
