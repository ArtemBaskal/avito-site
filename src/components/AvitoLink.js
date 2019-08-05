import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AvitoLink = () => (
  <Fragment>
    <Link to="/">
      <img
        src="https://www.avito.st/s/cc/resources/35f5a0d67b53.svg"
        alt="avito"
        style={{ width: "120px" }}
      />
    </Link>
  </Fragment>
);

export default AvitoLink;
