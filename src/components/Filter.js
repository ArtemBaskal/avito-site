import React from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../actions";

const categories = ["immovable", "cameras", "auto", "laptops"];

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterSelect = e => {
    dispatch(filterByCategory(e.target.value));
  };

  return (
    <div>
      <select
        name="type"
        onChange={handleFilterSelect}
        defaultValue="Любая категория"
      >
        <option value="Любая категория" disabled>
          Любая категория
        </option>
        {categories &&
          categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Filter;
