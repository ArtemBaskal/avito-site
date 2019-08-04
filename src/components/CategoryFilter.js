import React from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../actions";

const categories = [
  { ru: "НЕДВИЖИМОСТЬ", en: "immovable" },
  { ru: "ФОТОАППАРАТЫ", en: "cameras" },
  { ru: "АВТОМОБИЛИ", en: "auto" },
  { ru: "НОУТБУКИ", en: "laptops" }
];

const FilterByCategory = () => {
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
            <option key={category.en} value={category.en}>
              {category.ru}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterByCategory;
