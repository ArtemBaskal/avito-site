import axios from "axios";
import {
  FETCH_PRODUCTS,
  CHANGE_FAVORITE_STATUS,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  SORT_BY_PARAM
} from "./types";

export const fetchProducts = () => async dispatch => {
  const api = "https://avito.dump.academy";

  const productsData = {
    products: (await axios.get(`${api}/products`)).data.data,
    sellers: (await axios.get(`${api}/sellers`)).data.data
  };

  return dispatch({
    type: FETCH_PRODUCTS,
    payload: productsData
  });
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

export const changeFavoriteStatus = item => {
  return {
    type: CHANGE_FAVORITE_STATUS,
    payload: item
  };
};
