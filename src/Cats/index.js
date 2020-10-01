import { SET_CATS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATS:
      return action.cats;
    default:
      return state;
  }
};
