import { SET_CLASSES } from "./actionTypes";

import instance from "./instance";
export const fetchClasses = () => async dispatch => {
  try {
    const res = await instance.get("classes/");
    const classes = res.data;
    console.log(classes)
    dispatch({
      type: SET_CLASSES,
      payload: classes,
    });
  } catch (error) {
    console.error(error);
  }
};