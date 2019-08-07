import React from "react";
import { Link } from "react-router-dom";
import "../styles/FavoritesLink.css";

const FavoritesLink = () => (
  <ul className="favorites-link">
    <Link to="/favorites">
      <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.918 5.085a5.256 5.256 0 0 1 7.524 0c2.077 2.114 2.077 5.541 0 7.655l-7.405 7.534a.75.75 0 0 1-1.074 0L2.558 12.74c-2.077-2.114-2.077-5.54 0-7.655a5.256 5.256 0 0 1 7.524 0c.15.152.289.312.418.479.13-.167.269-.327.418-.479z"
          fill="#CCC"
          fillRule="nonzero"
        />
      </svg>
    </Link>
  </ul>
);

export default FavoritesLink;
