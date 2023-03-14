import { PAGE_TYPES } from "../types";

const currentPage = (data : any) => {
  const type = PAGE_TYPES.CURRENT_PAGE;
  return { type, payload: data };
};

export default {
    currentPage
}
