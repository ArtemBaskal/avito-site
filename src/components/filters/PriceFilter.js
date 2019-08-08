import React from "react";
import { filterByPrice } from "../../actions";
import { connect } from "react-redux";
import "../../styles/PriceFilter.css";

const INPUTS = {
  minPrice: {
    id: "minPrice",
    placeholder: "Цена от",
    text: "от",
    style: "left"
  },
  maxPrice: {
    id: "maxPrice",
    placeholder: "до, руб",
    text: "до",
    style: "right"
  }
};

const INITIAL_STATE = {
  maxPrice: { value: "", isBlured: true },
  minPrice: { value: "", isBlured: true }
};


//let MIN = "";

class FilterByCategory extends React.Component {
  state = INITIAL_STATE;

  onFormSubmit = e => {
    e.preventDefault();
    this.setState(INITIAL_STATE);
    this.props.filterByPrice(this.state);
  };

  onInputChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: { ...this.state[id], value }
    });
  };

  onInputBlur = ({ target: { id } }) => {

  //TODO: ЕСЛИ ПРАВАЯ ЦЕНА МЕНЬШЕ ЛЕВОЙ, ТО МЕНЯТЬ ИХ МЕСТАМИ
    // // const val = value;
    // console.log(value);
    // MIN = id === "maxPrice" ? value : null;
    // console.log(MIN);
    // console.log(
    //   id === "maxPrice" &&
    //     this.state.maxPrice.value &&
    //     Number(this.state.minPrice.value.replace(/\D/g, "")) >
    //       Number(this.state.maxPrice.value.replace(/\D/g, "")),
    //   this.state
    // );
    // if (
    //   id === "maxPrice" &&
    //   this.state.maxPrice.value &&
    //   Number(this.state.minPrice.value.replace(/\D/g, "")) >
    //     Number(this.state.maxPrice.value.replace(/\D/g, ""))
    // ) {
    //   this.setState({
    //     minPrice: {
    //       value: this.state.maxPrice.isBlured,
    //       isBlured: this.state.minPrice.isBlured
    //     },
    //     maxPrice: {
    //       value: MIN,
    //       isBlured: this.state.maxPrice.isBlured
    //     }
    //   });
    // }

    this.setState({
      [id]: {
        ...this.state[id],
        isBlured: !this.state[id].isBlured
      }
    });
  };

  formatPrice = (price, isBlured) => {
    let formattedPrice = "",
      units = "",
      degree = 0,
      decimals = 0;

    const priceValue = Number(price.replace(/\D/g, ""));

    formattedPrice = price && priceValue.toLocaleString();

    if (priceValue >= 99500) {
      degree = 3;
      units = "тыс.";
    }
    if (priceValue >= 999500) {
      degree = 6;
      decimals = 2;
      units = "млн.";
    }
    if (priceValue >= 999999500) {
      degree = 9;
      units = "млрд.";
    }
    return isBlured
      ? `${(priceValue / 10 ** degree)
          .toFixed(decimals)
          .replace(".", ",")} ${units}`
      : formattedPrice;
  };

  getValue = id => {
    const { isBlured, value } = this.state[id];
    const { text } = INPUTS[id];
    return (
      value && `${isBlured ? text : ""} ${this.formatPrice(value, isBlured)}`
    );
  };

  render() {
    const { products } = this.props.products;
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="price-filter-form">
          <label className="price-filter-label">Цена</label>
          <div>
            {INPUTS &&
              Object.values(INPUTS).map(({ id, placeholder, style }) => (
                <input
                  key={id}
                  id={id}
                  type="text"
                  maxLength={17}
                  value={this.getValue(id)}
                  placeholder={placeholder}
                  onChange={this.onInputChange}
                  onBlur={this.onInputBlur}
                  onFocus={this.onInputBlur}
                  className={`price-filter-input ${style}`}
                  autoComplete="off"
                />
              ))}
            <button type="submit" className="price-filter-btn">
              {products
                ? `Показать ${products.length} объявлений`
                : "Показать объявления"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  { filterByPrice }
)(FilterByCategory);
