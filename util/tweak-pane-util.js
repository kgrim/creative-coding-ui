const Tweakpane = require("tweakpane");

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

const formatString = (string) => {
  return (string.charAt(0).toLowerCase() + string.slice(1)).replace(/\s/g, "");
};
