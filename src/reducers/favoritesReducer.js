import { CHANGE_FAVORITE_STATUS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_FAVORITE_STATUS:
      const { id } = action.payload;
      try {
        if (!localStorage[id]) {
          localStorage[id] = JSON.stringify(action.payload);
        } else {
          delete localStorage[id];
          delete state[id];
          return {
            ...state
            // [id]: null
          };
        }
      } catch (e) {
        console.error(e);
        alert("Ошибка! В localStorage превышен лимит, оно будет очищено.");
        localStorage.clear();
      }
      return {
        ...state,
        [id]: action.payload
      };
    default:
      return state;
  }
};
