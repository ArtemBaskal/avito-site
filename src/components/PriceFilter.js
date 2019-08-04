import React from "react";
import { filterByPrice } from "../actions";
import { connect } from "react-redux";
import "./PriceFilter";

class FilterByCategory extends React.Component {
  state = { maxPrice: "", minPrice: "" };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.filterByPrice(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Цена</label>
          <div>
            <input
              type="number"
              value={this.state.minPrice}
              placeholder="Цена от"
              min={0}
              max={Infinity}
              onChange={e => this.setState({ minPrice: e.target.value })}
            />
            <input
              type="number"
              value={this.state.maxPrice}
              placeholder="до, руб"
              min={0}
              max={Infinity}
              onChange={e => this.setState({ maxPrice: e.target.value })}
            />
            <button type="submit">Найти</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { filterByPrice }
)(FilterByCategory);
