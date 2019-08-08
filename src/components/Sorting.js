import React from "react";
import { useDispatch } from "react-redux";
import { sortByParam } from "../actions";
import "../styles/Sorting.css";

const OPTIONS = {
  default: { order: "ASC", param: "id", en: "default", ru: "По умолчанию" },
  popular: { order: "DESC", param: "rating", en: "popular", ru: "Популярнее" },
  cheap: { order: "ASC", param: "price", en: "cheap", ru: "Дешевле" },
  expensive: { order: "DESC", param: "price", en: "expensive", ru: "Дороже" }
};

const Sorting = () => {
  const dispatch = useDispatch();

  const handleSortSelect = e => {
    const param = OPTIONS[e.target.value];
    dispatch(sortByParam(param));
  };

  return (
    <div>
      <label className="sorting-label">Сортировать</label>
      <select
        name="type"
        defaultValue="По умолчанию"
        onChange={handleSortSelect}
        className="sorting-select"
      >
        {OPTIONS &&
          Object.values(OPTIONS).map(({ en, ru }) => (
            <option key={en} value={en}>
              {ru}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Sorting;
