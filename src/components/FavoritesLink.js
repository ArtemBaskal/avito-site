import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FavoritesLink = () => (
  <Fragment>
    <Link to="/favorites">
      <img
        src="https://www.avito.st/s/cc/resources/c5d445485e85.svg"
        alt="favorites"
        // style={{ width: "45px" }}
      />
    </Link>
  </Fragment>
);

export default FavoritesLink;
