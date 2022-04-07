export interface Viewer {
  paintElements(elements: { id: string; color: string }[]);
  selectLevel(levelId: string);
  tagElements(elements: { id: string; name: string }[]);
  loadModel(loadModel: string);
  drawModel(modelElementsEndpoints: { type: string; url: string }[]);
  nameLevels(
    levels: {
      id: string;
      name: string;
    }[]
  );
  changeModelState(changeModelStateCallback: () => void);
  onElementIdChange(sendElementIdCallback: () => void);
}
