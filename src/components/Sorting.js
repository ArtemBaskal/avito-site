import React from "react";
import { useDispatch } from "react-redux";
import { sortByParam } from "../actions";

const OPRIONS = [
  { en: "default", ru: "По умолчанию" },
  { en: "popular", ru: "Популярнее" },
  { en: "cheap", ru: "Дешевле" },
  { en: "expensive", ru: "Дороже" }
];

const Sorting = () => {
  const dispatch = useDispatch();

  const handleSortSelect = e => {
    dispatch(sortByParam(e.target.value));
  };

  return (
    <div>
      Сортировать
      <select
        name="type"
        defaultValue="По умолчанию"
        onChange={handleSortSelect}
      >
        {OPRIONS &&
          OPRIONS.map(({ en, ru }) => (
            <option key={en} value={en}>
              {ru}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Sorting;
