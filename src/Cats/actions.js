import { API_URL } from "../constants";

export const SET_CATS = "SET_CATS";

export function getCats() {
  return (dispatch) => {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((resp) => resp.data)
      .then((cats) => dispatch(setCats(cats)));
  };
}

export function setCats(cats) {
  return {
    type: SET_CATS,
    cats
  };
}
