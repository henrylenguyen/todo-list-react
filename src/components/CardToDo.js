import React, { useState } from "react";

const CardToDo = () => {
  const rex = /^[\s\W]/;
  // Công việc người dùng nhập
  const [todo, setTodo] = useState("");
  // Danh sách công việc người dùng đã nhập, ban đầu nó là 1 mảng rỗng
  const [jobs, setJobs] = useState(() => {
    return localStorage.getItem("JobTodoList") !== null
      ? JSON.parse(localStorage.getItem("JobTodoList"))
      : [];
  });
  console.log("job", jobs);
  // Danh sách các công việc đã hoàn thành
  const [check, setCheck] = useState(() => {
    return localStorage.getItem("JobTodoListDone") !== null
      ? JSON.parse(localStorage.getItem("JobTodoListDone"))
      : [];
  });

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  // -------------------------HÀM TẠO MỚI CÔNG VIỆC SAU MỖI LẦN BẤM NÚT------------
  const handleSubmit = () => {
    if(todo===undefined || todo===null || todo==="") return;
    setJobs((prev) => {
      const newJobs = [...prev, todo];
      setLocalStorage("JobTodoList", newJobs);
      return newJobs;
    });
    setTodo("");
  };
  // ------------------------------ HÀM XÓA CÔNG VIỆC---------------------------------
  const handleDelete = (id) => {
    // console.log(jobs);
    jobs.splice(id, 1);
    // Sao chép lại mảng hiện tại đang bị xóa.
    let jobRemaining = [...jobs];
    // console.log(jobs);
    setLocalStorage("JobTodoList", jobRemaining);
    return setJobs(jobRemaining);
  };
  // ------------------------- HÀM XÓA CÔNG VIỆC HOÀN THÀNH-----------------------------
  const handleDeleteComplete = (id) => {
    // console.log(jobs);
    check.splice(id, 1);
    // Sao chép lại mảng hiện tại đang bị xóa.
    let jobRemaining = [...check];
    // console.log(jobs);
    setLocalStorage("JobTodoListDone", jobRemaining);
    return setCheck(jobRemaining);
  };
  // ------------------------------HÀM CHECK VIỆC ĐÃ LÀM-------------------------------
  const handleCheck = (id) => {
    // Lọc qua danh sách công việc, lấy ra công việc đang check
    let Filter = jobs.filter((item, index) => index === id);
    console.log(Filter);
    // khi check thì đồng nghĩa xóa đi phần tử trong danh sách công việc
    jobs.splice(id, 1);
    let jobRemaining = [...jobs];
    // Đồng thời cập nhật lại localStorage
    setLocalStorage("JobTodoList", jobRemaining);
    // Sau đó sẽ đưa giá trị đã xóa xuống danh sách hoàn thành
    let jobAdded = [...check, ...Filter];

    setLocalStorage("JobTodoListDone", jobAdded);
    return setCheck(jobAdded);
  };
  function reg(e){
    if (rex.test(e.target.value)) {
      return;
    } else {
      setTodo(e.target.value);
    }
  }
  // --------------------- RENDER GIAO DIỆN-------------------------------------
  
  return (
    <div>
      <div className="card__add">
        <input
          id="newTask"
          name="newTask"
          type="text"
          placeholder="Enter an activity..."
          value={todo}
          onChange={(e) => reg(e)}
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
