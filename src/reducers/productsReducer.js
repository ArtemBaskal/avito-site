import {
  FETCH_PRODUCTS,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  SORT_BY_PARAM
} from "../actions/types";

//TODO: RADIX SORT

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
    case SORT_BY_PARAM:
      // const { products, sellers } = state;

      //TODO: Опционально - добавить сортировку по убыванию
      const sortByPriceExpensive = products =>
        products
          .map(product => {
            if (!product.price) {
              product.price = 0;
            }
            return product;
          })
          .sort((a, b) => b.price - a.price);

      const sortByPrice = products =>
        products
          .map(product => {
            if (!product.price) {
              product.price = 0;
            }
            return product;
          })
          .sort((a, b) => a.price - b.price);

      const sortByRating = products =>
        products.sort(
          (a, b) =>
            state.sellers[b.relationships.seller].rating -
            state.sellers[a.relationships.seller].rating
        );

      const defaultSort = products => products;

      let sortByParam;
      switch (action.payload) {
        case "popular":
          sortByParam = sortByRating;
          break;
        case "cheap":
          sortByParam = sortByPrice;
          break;
        case "expensive":
          sortByParam = sortByPriceExpensive;
          break;
        default:
          sortByParam = defaultSort;
      }

      return {
        products: sortByParam(state.products),
        sellers: state.sellers
      };

    default:
      return state;
  }
};
