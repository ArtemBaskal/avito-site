import React from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../actions";

const CAREGORIES = [
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
        {CAREGORIES &&
          CAREGORIES.map(({ en, ru }) => (
            <option key={en} value={en}>
              {ru}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterByCategory;
