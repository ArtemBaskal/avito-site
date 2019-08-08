import {
  FETCH_PRODUCTS,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  SORT_BY_PARAM
} from "../actions/types";
import radixSort from "../helpers/radixSort";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;

    case FILTER_BY_CATEGORY:
      const { products, sellers } = state;

      return {
        products: products.filter(
          ({ category }) => category === action.payload
        ),
        sellers
      };

    case FILTER_BY_PRICE: {
      const { products, sellers } = state;
      let { minPrice, maxPrice } = action.payload;

      minPrice = parseFloat(minPrice || -Infinity);
      maxPrice = parseFloat(maxPrice || Infinity);

      return {
        products: products.filter(
          ({ price }) => price > minPrice && price < maxPrice
        ),
        sellers
      };
    }

    case SORT_BY_PARAM: {
      const { products, sellers } = state;
      const { param, order } = action.payload;

      const sortByRating = products =>
        products.sort(
          (productA, productB) =>
            sellers[productB.relationships.seller].rating -
            sellers[productA.relationships.seller].rating
        );

      const sortByParam = param === "rating" ? sortByRating : radixSort;

      return {
        products: sortByParam(products, param, order),
        sellers
      };
    }

    default:
      return state;
  }
};
