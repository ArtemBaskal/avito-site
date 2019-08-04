import axios from "axios";
import {
  FETCH_PRODUCTS,
  ADD_ITEM_TO_FAVORITES,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE
} from "./types";

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
