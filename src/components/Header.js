import React from "react";
import FavoritesLink from "./FavoritesLink";
import CategoryFilter from "./filters/CategoryFilter";
import PriceFilter from "./filters/PriceFilter";
import Sorting from "./Sorting";
import AvitoLink from "./AvitoLink";

const Header = () => (
  <div>
    <AvitoLink />
    <FavoritesLink />
    <CategoryFilter />
    <PriceFilter />
    <Sorting />
  </div>
);

export default Header;
