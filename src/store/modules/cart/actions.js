import { add, remove } from "./types";

export const addProduct = (product) => {
  return { type: add, product };
};

export const removeProduct = (id) => {
  return { type: remove, id };
};
