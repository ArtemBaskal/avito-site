import axios from "axios";
import {
  FETCH_PRODUCTS,
  CHANGE_FAVORITE_STATUS,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  SORT_BY_PARAM
} from "./types";

const API = "https://avito.dump.academy";

export const fetchProducts = () => async dispatch => {
  const productsData = {
    products: (await axios.get(`${API}/products`)).data.data,
    sellers: (await axios.get(`${API}/sellers`)).data.data
  };

  return dispatch({
    type: FETCH_PRODUCTS,
    payload: productsData
  });
};

export const filterByCategory = filterCategory => async dispatch => {
  //TODO: EPIC
  const productsData = {
    products: (await axios.get(`${API}/products`)).data.data.filter(
      ({ category }) => category === filterCategory
    ),
    sellers: (await axios.get(`${API}/sellers`)).data.data
  };

  return dispatch({
    type: FILTER_BY_CATEGORY,
    payload: productsData
  });
};

export const filterByPrice = minMaxPrice => async dispatch => {
  const productsData = {
    products: (await axios.get(`${API}/products`)).data.data,
    sellers: (await axios.get(`${API}/sellers`)).data.data
  };
  return dispatch({
    type: FILTER_BY_PRICE,
    payload: { ...minMaxPrice, ...productsData }
  });
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
