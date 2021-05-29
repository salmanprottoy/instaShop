import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import { devToolsEnhancer } from 'redux-devtools-extension';

const root = combineReducers({
  ProductsReducer,
});
const store = createStore(root,devToolsEnhancer);
export default store;
