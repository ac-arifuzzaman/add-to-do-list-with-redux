import { COLORCHANGED, STATASCHANGED } from "./actionTypes";

export const colorchanged = (color, changedType) => {
  return {
    tyep: STATASCHANGED,
    payload: {
      color,
      changedType,
    },
  };
};

export const stataschanged = (statas) => {
  return {
    type: COLORCHANGED,
    payload: statas,
  };
};
