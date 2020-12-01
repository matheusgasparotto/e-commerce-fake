import { add, remove } from "./types";

const addProduct = (product) => {
  return { type: add, product };
};

const removeProduct = (id) => {
  return { type: remove, id };
};
