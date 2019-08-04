import React from "react";
import ProductsList from "./ProductsList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const App = () => {
  return (
    <div>
      <CategoryFilter />
      <PriceFilter />
      <ProductsList />
    </div>
  );
};

export default App;
