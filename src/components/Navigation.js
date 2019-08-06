import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CAREGORIES } from "./filters/CategoryFilter";
import { filterByCategory } from "../actions";
import "../styles/Navigation.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const handleCategorySelect = e => {
    dispatch(filterByCategory(e.target.id));
  };
  return (
    <nav>
      <ul>
        <Link to="/">
          <img
            src="https://www.avito.st/s/cc/resources/35f5a0d67b53.svg"
            alt="avito"
            style={{ width: "120px" }}
            className="nav-avito-logo"
          />
        </Link>
        {CAREGORIES &&
          CAREGORIES.map(({ en, ru }) => (
            <li
              key={en}
              id={en}
              className="nav-category-li"
              onClick={handleCategorySelect}
            >
              {ru}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;
