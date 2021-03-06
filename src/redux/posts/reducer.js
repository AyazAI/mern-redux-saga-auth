import { FETCH_DATA_SUCCESS } from "../actions";

const init = {
  counter: 0,
};

export default (state = init, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
