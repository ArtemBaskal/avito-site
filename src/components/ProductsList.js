import React, { useEffect } from "react";
import { fetchProducts } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import "../styles/ProductsList.css";

const ProductsList = state => {
  const apiProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, {});

  return (
    <div className="products-list">
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
