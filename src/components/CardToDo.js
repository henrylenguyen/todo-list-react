import { useReducer } from "react";
import { addJob, checkJob, deleteComplete, deleteJob, setJob } from "./Todo/actions";
import logger from "./Todo/logger";

import reducer, { initState } from "./Todo/reducer";


// -----------------------dispatch-----------------------------------

const rex = /^[\s\W]/;

// Công việc người dùng nhập
// eslint-disable-next-line react-hooks/rules-of-hooks

const CardToDo = () => {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs, check } = state;

  // ---------------------------CHECK ĐẦU VÀO----------------------------
  function checkInput(e) {
    let value = e.target.value;
    if (rex.test(value)) return;
    else {
      dispatch(setJob(value));
    }
  }
  // ------------------HÀM TẠO MỚI CÔNG VIỆC SAU MỖI LẦN BẤM NÚT------------
  const handleSubmit = () => {
    if (
      job === null ||
      job === "" ||
      job === undefined
    )
      return;
    dispatch(addJob(job));
    dispatch(setJob(""));
  };
  // -------------------HÀM XÓA CÔNG VIỆC-------------------------------------
   const handleDelete = (id) => {
    dispatch(deleteJob(id));
  };
  // ----------------HÀM CHECK CÔNG VIỆC ĐÃ LÀM-------------------------------
   const handleCheck = (id) => {
    dispatch(checkJob(id));
  };
  // -------------- HÀM XÓA CÔNG VIỆC ĐÃ LÀM----------------------------------
   const handleDeleteComplete = (id) => {
    dispatch(deleteComplete(id));
  };
  // --------------------- RENDER GIAO DIỆN-------------------------------------

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
