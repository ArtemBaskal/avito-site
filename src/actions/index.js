import axios from "axios";
import {
  FETCH_PRODUCTS,
  ADD_ITEM_TO_FAVORITES,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  SORT_BY_PARAM
} from "./types";
// import history from "../history";

export const fetchProducts = () => async dispatch => {
  const products = await axios.get("https://avito.dump.academy/products");
  const sellers = await axios.get("https://avito.dump.academy/sellers");

  const productsData = {
    products: products.data.data,
    sellers: sellers.data.data
  };

  return dispatch({
    type: FETCH_PRODUCTS,
    payload: productsData
  });
};

export const addItemToFavorites = item => {
  // history.push("/favorites");
  return {
    type: ADD_ITEM_TO_FAVORITES,
    payload: item
  };
};

export const filterByCategory = category => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category
  };
};

export const filterByPrice = minMaxPrice => {
  return {
    type: FILTER_BY_PRICE,
    payload: minMaxPrice
  };
};

export const sortByParam = param => {
  return {
    type: SORT_BY_PARAM,
    payload: param
  };
};
