import {
  SET_JOB,
  ADD_JOB,
  CHECK_JOB,
  DELETE_JOB,
  DELETE_COMPLETE,
} from "./constains";
 

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };



//----------------------- Xác định biến khởi tạo---------------------------

export const initState = {
  job: "",
  jobs:
    localStorage.getItem("jobs") === null
      ? []
      : JSON.parse(localStorage.getItem("jobs")),
  check:
    localStorage.getItem("jobsComplete") === null
      ? []
      : JSON.parse(localStorage.getItem("jobsComplete")),
};

// -------------------Tạo reducer-------------------------------------------
const reducer = (state, action) => {
  // console.log("State:", state);
  // console.log("Action:", action);
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      setLocalStorage("jobs", newState.jobs);
      break;
    case DELETE_JOB:
      const newJob = [...state.jobs];
      newJob.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJob,
      };
      setLocalStorage("jobs", newState.jobs);
      break;
    case CHECK_JOB:
      const newCheck = [...state.jobs];
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        // payload: index
        ...state,
        check: [...state.check, newCheck[action.payload]],
        jobs: newJobs,
      };
      setLocalStorage("jobs", newState.jobs);
      setLocalStorage("jobsComplete", newState.check);
      break;
    case DELETE_COMPLETE:
      const newChecks = [...state.check];
      newChecks.splice(action.payload, 1);
      newState = {
        // payload: index
        ...state,
        check: newChecks,
      };
      setLocalStorage("jobsComplete", newState.check);
      break;
    default:
      throw new Error("Invalid action");
  }
  // console.log("New state", newState);
  return newState;
};
export default reducer;