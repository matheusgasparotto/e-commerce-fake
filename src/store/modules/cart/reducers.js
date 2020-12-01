import { add, remove } from "./types";

const defaultState = { products: [], total: 0 };

const cart = (state = defaultState, action) => {
  const { products, total } = state;
  const { product, id } = action;

  switch (action.type) {
    case add:
      console.log(state);
      const addProducts = [...products, product];
      return { total: total + 1, products: addProducts };

    case remove:
      const removedProducts = products.filter((product) => product.id !== id);
      return { total: total - 1, products: removedProducts };

    default:
      return state;
  }
};

export default cart;
