import { createStore, combineReducers } from "redux";
import products from "./modules/products/reducers";
import cart from "./modules/cart/reducers";

const reducers = combineReducers({ ...products, cart });

const store = createStore(reducers);

export default store;
