import React from "react";
import { useDispatch } from "react-redux";
import { sortByParam } from "../actions";

const Sorting = () => {
  const dispatch = useDispatch();

  const handleSortSelect = e => {
    dispatch(sortByParam(e.target.value));
  };
  return (
    <select name="type" defaultValue="По умолчанию" onChange={handleSortSelect}>
      <option value="По умолчанию" disabled>
        По умолчанию
      </option>
      <option value="popular">Популярнее</option>
      <option value="cheap">Дешевле</option>
    </select>
  );
};

export default Sorting;
