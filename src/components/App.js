import React from "react";
import ProductsList from "./ProductsList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import Sorting from "./Sorting";

const App = () => {
  return (
    <div>
      <CategoryFilter />
      <PriceFilter />
      <Sorting />
      <ProductsList />
    </div>
  );
};

export default App;
