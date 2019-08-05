import React, { Fragment } from "react";
import FavoritesLink from "./FavoritesLink";
import CategoryFilter from "./filters/CategoryFilter";
import PriceFilter from "./filters/PriceFilter";
import Sorting from "./Sorting";
import AvitoLink from "./AvitoLink";

const Header = () => (
  <Fragment>
    <AvitoLink />
    <FavoritesLink />
    <CategoryFilter />
    <PriceFilter />
    <Sorting />
  </Fragment>
);

export default Header;
