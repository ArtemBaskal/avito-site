import React from "react";
import { addItemToFavorites } from "../actions";
import { useDispatch } from "react-redux";

const Product = props => {
  const { title, pictures, price, sellerName, sellerRating } = props;
  const dispatch = useDispatch();

  const onItemClick = () => {
    dispatch(addItemToFavorites(props));
  };
  return (
    <div onClick={onItemClick}>
      <div>{title}</div>
      <img src={pictures[0]} alt={title} />
      <div>Ещё {pictures.length} фото</div>
      <div>{price} ₽</div>
      <div>{sellerName}</div>
      <div>{sellerRating}</div>
      <br />
    </div>
  );
};

export default Product;
