import React, { useEffect } from "react";
import { fetchProducts } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";

const ProductsList = state => {
  const apiProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(apiProducts.id));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {apiProducts.products &&
        apiProducts.products.map(
          ({ id, title, pictures, price, relationships: { seller } }) => {
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                pictures={pictures}
                sellerName={apiProducts.sellers[seller].name}
                sellerRating={apiProducts.sellers[seller].rating}
              />
            );
          }
        )}
    </div>
  );
};

export default ProductsList;
