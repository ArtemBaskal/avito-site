import React from "react";
import { changeFavoriteStatus } from "../actions";
import { connect } from "react-redux";
import "../styles/Product.css";

class Product extends React.Component {
  params = { ...this.props, timestamp: Date.now() };

  onHeartClick = () => {
    const { changeFavoriteStatus, isFavorite, isSmall } = this.props;
    isFavorite && !isSmall && window.location.reload();
    changeFavoriteStatus(this.params);
  };

  classNamy = () => {
    if (this.props.isSmall) return `small`;
    if (this.props.isFavorite && !this.props.isSmall)
      return `fav-js-favorites-add-icon`;
    else
      return `js-favorites-add-icon ${localStorage[this.props.id] &&
        `selected`}`;
  };
  render() {
    const {
      id,
      title,
      pictures,
      price,
      sellerName,
      sellerRating,
      isFavorite,
      isSmall
    } = this.props;
    return (
      <div className="product">
        <header title={`Объявление ${title}`} className="product-header">
          <i
            className={this.classNamy()}
            onClick={this.onHeartClick}
            title="Добавить в избранное и в сравнение"
          />
          <img
            src={pictures[0]}
            alt={title}
            className={isFavorite ? "fav-product-image" : "product-image"}
          />
          <div className="img-number">{pictures.length}</div>
        </header>
        <div>
          <span className="title" title={title}>
            {title}
          </span>
          <span className="price">
            {price ? `${price.toLocaleString()} ₽` : "Цена не указана"}
          </span>
          {!isSmall && (
            <div>
              <div>{sellerName}</div>
              <div>{sellerRating}</div>
            </div>
          )}
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
  { changeFavoriteStatus }
)(Product);
