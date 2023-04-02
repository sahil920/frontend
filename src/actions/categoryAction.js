import axios from "axios";
import { CATEGORY_CREATE_FAIL, CATEGORY_CREATE_REQUEST, CATEGORY_CREATE_SUCCESS, CATEGORY_LIST_FAILS, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from "../constants/categoryConstant";

export const listCategory = () => async (dispatch) => {
    try {
      dispatch({ type: CATEGORY_LIST_REQUEST });
      const { data } = await axios.get("https://node-backend-ecom.onrender.com/category/get-category");
      dispatch({
        type: CATEGORY_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_LIST_FAILS,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const categoryCreate = (name) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CATEGORY_CREATE_REQUEST,
      });
      // const { data } = await axios.post("http://localhost:8080/api/category/create-category");
      const {userLogin: { userInfo },} = getState();
      const config = {
        headers: {
          "Contnet-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(`http://localhost:8080/api/category/create-category`, {name},config);
      dispatch({
        type: CATEGORY_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
