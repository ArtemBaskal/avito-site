import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import favoritesReducer from "./favoritesReducer";

export default combineReducers({
  products: productsReducer,
  favorites: favoritesReducer
});
