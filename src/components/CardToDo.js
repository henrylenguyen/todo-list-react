import React, { useReducer, useState } from "react";

//---------------------------- Xác định biến khởi tạo---------------------------
  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
const initState = {
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
// --------------------------------Tạo action---------------------------------------
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";
const CHECK_JOB = "check_job";
const DELETE_COMPLETE = "delete_complete";
const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
const checkJob = (payload) => {
  return {
    type: CHECK_JOB,
    payload,
  };
};
const deleteComplete = (payload) => {
  return {
    type: DELETE_COMPLETE,
    payload,
  };
};

// -------------------------------Tạo reducer-------------------------------------------
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
      setLocalStorage("jobs",newState.jobs);
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

// -----------------------dispatch-----------------------------------

const CardToDo = () => {
  const rex = /^[\s\W]/;
  // Công việc người dùng nhập


  
  // ---------------------------CHECK ĐẦU VÀO----------------------------
  function checkInput(e) {
    let value = e.target.value;
    if (rex.test(value)) return;
    else {
      dispatch(setJob(value));
    }
  }
  // -------------------------HÀM TẠO MỚI CÔNG VIỆC SAU MỖI LẦN BẤM NÚT------------
  const handleSubmit = () => {
    if(job===null || job===""|| job===undefined) return;
    dispatch(addJob(job));
    dispatch(setJob(""));
  };
  // --------------------------HÀM XÓA CÔNG VIỆC-------------------------------------
  const handleDelete = (id) => {
    dispatch(deleteJob(id));
  };
  // -------------------------HÀM CHECK CÔNG VIỆC ĐÃ LÀM-------------------------------
  const handleCheck = (id) => {
    dispatch(checkJob(id));
  };
  // ------------------------ HÀM XÓA CÔNG VIỆC ĐÃ LÀM----------------------------------
  const handleDeleteComplete = (id) => {
    dispatch(deleteComplete(id));
  };
  // --------------------- RENDER GIAO DIỆN-------------------------------------
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs, check } = state;
  // console.log(job, jobs, check);
  return (
    <div>
      <div className="card__add">
        <input
          id="newTask"
          name="newTask"
          type="text"
          placeholder="Enter an activity..."
          value={job}
          onChange={(e) => checkInput(e)}
        />
        <button onClick={handleSubmit} id="addItem">
          <i className="fa fa-plus"></i>
        </button>
      </div>
      <div className="card__todo">
        <ul className="todo" id="todo">
          {jobs.map((item, index) => (
            <li key={index} className="todo-task">
              <span className="todo-title">{item}</span>
              <div className="btn-group">
                <i
                  className="fas fa-trash-can icon-delete"
                  onClick={() => handleDelete(index)}
                ></i>
                <i
                  className="fas fa-check icon-check"
                  onClick={() => handleCheck(index)}
                ></i>
              </div>
            </li>
          ))}
        </ul>

        <ul className="todo" id="completed">
          {check.map((item, index) => (
            <li key={index} className="todo-task">
              <span className="todo-title">{item}</span>
              <div className="btn-group">
                <i
                  className="fas fa-trash-can icon-delete"
                  onClick={() => handleDeleteComplete(index)}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardToDo;
