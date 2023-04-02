import { CATEGORY_LIST_FAILS, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_UPDATE_FAIL, CATEGORY_UPDATE_REQUEST, CATEGORY_UPDATE_SUCCESS } from "../constants/categoryConstant";

export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
      case CATEGORY_LIST_REQUEST:
        return { loading: true, categories: [] };
      case CATEGORY_LIST_SUCCESS:
        return { loading: false, categories: action.payload };
      case CATEGORY_LIST_FAILS:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const categoryCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CATEGORY_UPDATE_REQUEST:
        return { loading: true };
      case CATEGORY_UPDATE_SUCCESS:
        return { loading: false, success: true, categoryInfo: action.payload };
      case CATEGORY_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };