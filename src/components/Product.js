import React from "react";
import { addItemToFavorites } from "../actions";
import { connect } from "react-redux";
import "../styles/Product.css";

class Product extends React.Component {
  params = { ...this.props, timestamp: Date.now() };

  onHeartClick = () => {
    this.props.addItemToFavorites(this.params);
  };

  heartStyle = id => {
    let style = "js-favorites-add-icon";
    if (localStorage[id]) style += " selected";
    return style;
  };

  render() {
    const { id, title, pictures, price, sellerName, sellerRating } = this.props;
    // const { heartStyle, onHeartClick } = this;
    return (
      <div className="product">
        <i className={this.heartStyle(id)} onClick={this.onHeartClick} />
        <header>
          <img src={pictures[0]} alt={title} className="product-image" />
          <div className="img-number">{pictures.length}</div>
        </header>
        <div>
          <span className="title">{title}</span>
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
