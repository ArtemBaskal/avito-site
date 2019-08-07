import React from "react";
import { filterByPrice } from "../../actions";
import { connect } from "react-redux";
import "../../styles/PriceFilter.css";

class FilterByCategory extends React.Component {
  state = { maxPrice: "", minPrice: "" };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.filterByPrice(this.state);
  };

  render() {
    // this.props.products.products &&
    //   console.log("LENGHT", this.props.products.products.length);
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="price-filter-form">
          <label className="price-filter-label">Цена</label>
          <div>
            <input
              type="number"
              value={this.state.minPrice}
              placeholder="Цена от"
              min={0}
              max={Infinity}
              onChange={e => this.setState({ minPrice: e.target.value })}
              className="price-filter-input left"
            />
            <input
              type="number"
              value={this.state.maxPrice}
              placeholder="до, руб"
              min={0}
              max={Infinity}
              onChange={e => this.setState({ maxPrice: e.target.value })}
              className="price-filter-input right"
            />
            <button type="submit" className="price-filter-btn">
              {this.props.products.products
                ? `Показать ${this.props.products.products.length} объявлений`
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
