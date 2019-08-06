import React from "react";
import { addItemToFavorites } from "../actions";
import { connect } from "react-redux";
import "../styles/Product.css";

class Product extends React.Component {
  params = { ...this.props, timestamp: Date.now() };

  onHeartClick = () => {
    this.props.addItemToFavorites(this.params);
  };

  render() {
    const { id, title, pictures, price, sellerName, sellerRating } = this.props;
    return (
      <div className="product">
        <header title={`Объявление ${title}`} className="product-header">
          <i
            className={`js-favorites-add-icon ${localStorage[id] &&
              `selected`}`}
            onClick={this.onHeartClick}
            title="Добавить в избранное и в сравнение"
          />
          <img src={pictures[0]} alt={title} className="product-image" />
          <div className="img-number">{pictures.length}</div>
        </header>
        <div>
          <span className="title" title={title}>
            {title}
          </span>
          <span className="price">
            {price ? `${price} ₽` : "Цена не указана"}
          </span>
          <div>{sellerName}</div>
          <div>{sellerRating}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(
  mapStateToProps,
  { addItemToFavorites }
)(Product);
