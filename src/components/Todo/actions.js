import { SET_JOB,ADD_JOB,CHECK_JOB, DELETE_JOB,DELETE_COMPLETE } from "./constains";
// ----------------------Tạo action---------------------------------------

export const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
export const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
export const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
export const checkJob = (payload) => {
  return {
    type: CHECK_JOB,
    payload,
  };
};
export const deleteComplete = (payload) => {
  return {
    type: DELETE_COMPLETE,
    payload,
  };
};
