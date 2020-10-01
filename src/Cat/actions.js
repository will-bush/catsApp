export const SET_CURRENT_CAT = "SET_CURRENT_CAT";

export function setCurrentCat(cat) {
  return {
    type: SET_CURRENT_CAT,
    cat
  };
}
