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

      const sortByPrice = price => products => {
        let sortCallback;
        const cheapFirst = (a, b) => a.price - b.price;
        const expensiveFirst = (a, b) => b.price - a.price;

        if (price === "cheap") {
          sortCallback = cheapFirst;
        } else if (price === "expensive") {
          sortCallback = expensiveFirst;
        }

        return products
          .map(product => {
            if (!product.price) {
              product.price = 0;
            }
            return product;
          })
          .sort(sortCallback);
      };

      const sortByRating = products =>
        products.sort(
          (a, b) =>
            sellers[b.relationships.seller].rating -
            sellers[a.relationships.seller].rating
        );

      const defaultSort = products => products;

      let sortByParam;
      switch (action.payload) {
        case "popular":
          sortByParam = sortByRating;
          break;
        case "cheap":
          sortByParam = sortByPrice(action.payload);
          break;
        case "expensive":
          sortByParam = sortByPrice(action.payload);
          break;
        default:
          sortByParam = defaultSort;
      }

      return {
        products: radixSort(products, "price"), //TODO: finish refactoring
        sellers: sellers
      };
    }
    default:
      return state;
  }
};
