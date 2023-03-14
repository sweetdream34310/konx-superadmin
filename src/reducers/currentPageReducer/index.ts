import { PAGE_TYPES } from "../../actions/types";

const initialState = {
  currentPage: ''
};

const currentPageReducer = (state = initialState, action : any) => {

  switch(action.type) {
    case PAGE_TYPES.CURRENT_PAGE:
      return {
        ...state,
        currentPage : action.payload,
      };
    default:
      return state;
  }
}

export default currentPageReducer;