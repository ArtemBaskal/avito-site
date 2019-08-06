import React from "react";
import FavoritesLink from "./FavoritesLink";
import CategoryFilter from "./filters/CategoryFilter";
import PriceFilter from "./filters/PriceFilter";
import Sorting from "./Sorting";
import Navigation from "./Navigation";

const Header = () => (
  <div>
    <FavoritesLink />
    <Navigation />
    <CategoryFilter />
    <PriceFilter />
    <Sorting />
  </div>
);

export default Header;
