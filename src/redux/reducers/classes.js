import { SET_CLASSES } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLASSES:
      const classes = action.payload;
      return classes;

    default:
      return state;
  }
};

export default reducer;