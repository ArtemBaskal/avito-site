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
    case FILTER_BY_CATEGORY:
      return action.payload;

    case FILTER_BY_PRICE: {
      let { minPrice, maxPrice, products, sellers } = action.payload;

      minPrice = Number(minPrice.value.replace(/\D/g, "") || -Infinity);
      maxPrice = Number(maxPrice.value.replace(/\D/g, "") || Infinity);

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
