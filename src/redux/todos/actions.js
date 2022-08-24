import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOOGLED } from "./actiontype";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toogeld = (todoId) => {
  return {
    type: TOOGLED,
    payload: todoId,
  };
};

export const colorselected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};