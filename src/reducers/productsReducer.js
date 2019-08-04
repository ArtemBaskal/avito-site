import {
  FETCH_PRODUCTS,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE
} from "../actions/types";

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
    case FILTER_BY_PRICE: {
      let { minPrice, maxPrice } = action.payload;

      minPrice = parseFloat(minPrice || -Infinity);
      maxPrice = parseFloat(maxPrice || Infinity);

      return {
        products: state.products.filter(
          ({ price }) => price > minPrice && price < maxPrice
        ),
        sellers: state.sellers
      };
    }
    default:
      return state;
  }
};
