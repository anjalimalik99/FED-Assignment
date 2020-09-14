import {
  SET_SEARCH_STRING,
  SET_PAGE_NO,
  SET_DATA,
  RESET_DATA,
  RESET_PAGE_NO,
} from "./actionTypes";

export function setSearchString(searchString) {
  return {
    type: SET_SEARCH_STRING,
    searchString,
  };
}

export function setPageNo(pageNo) {
  return {
    type: SET_PAGE_NO,
    pageNo,
  };
}

export function resetPageNo() {
  return {
    type: RESET_PAGE_NO,
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
    data,
  };
}

export function resetData() {
  return {
    type: RESET_DATA,
  };
}
