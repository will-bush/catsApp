import { SET_CURRENT_CAT } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CAT:
      return action;
    default:
      return state;
  }
};
