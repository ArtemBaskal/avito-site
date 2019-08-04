import { FETCH_PRODUCTS, FILTER_BY_CATEGORY } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case FILTER_BY_CATEGORY:
      return {
        products: state.products.filter(
          ({ category }) => category === action.payload
        ),
        sellers: state.sellers
      };
    default:
      return state;
  }
};
