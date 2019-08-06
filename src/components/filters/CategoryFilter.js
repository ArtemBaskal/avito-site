import React from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../actions";
import "../../styles/CategoryFilter.css";

export const CAREGORIES = [
  { ru: "Недвижимость", en: "immovable" },
  { ru: "Автомобили", en: "auto" },
  { ru: "Фотоаппараты", en: "cameras" },
  { ru: "Ноутбуки", en: "laptops" }
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
        className="category-filter-select"
      >
        <option value="Любая категория" disabled>
          Любая категория
        </option>
        {CAREGORIES &&
          CAREGORIES.map(({ en, ru }) => (
            <option key={en} value={en} className="category-filter-option">
              {ru.toUpperCase()}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterByCategory;
