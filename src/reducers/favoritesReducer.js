import { ADD_ITEM_TO_FAVORITES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM_TO_FAVORITES:
      try {
        localStorage[action.payload.id] = JSON.stringify(action.payload);
      } catch (e) {
        console.error(e);
        alert("Ошибка! В localStorage превышен лимит, оно будет очищено.");
        localStorage.clear();
      }
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};
