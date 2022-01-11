const Tweakpane = require("tweakpane");

import { formatString } from "./general-util";
import { params, paneData, tabTitles } from "./pane-data";

export const createPane = () => {
  const pane = new Tweakpane.Pane();
  const tab = addTab(pane);

  tabTitles.map((title, index) => {
    return addInputsToPane(tab.pages[index], title);
  });
};

const addTab = (pane) => {
  return pane.addTab({
    pages: tabTitles.map((title) => {
      return {
        title,
      };
    }),
  });
};

const addInputsToPane = (pane, tabName) => {
  const formattedTabName = formatString(tabName);

  Object.keys(paneData[formattedTabName]).map((field) => {
    return pane.addInput(
      params[formattedTabName],
      field.toString(),
      paneData[formattedTabName][field]
    );
  });
};
