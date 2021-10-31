import { useState } from "react";
import "./App.css";
const initTodoList = [{ id: 1, content: "Learn React", status: "loading" }];

function App() {
  const [tasks, setTasks] = useState(initTodoList);
  const [newValue, setNewValue] = useState("");

  const handelSubmitTodoList = (e) => {
    e.preventDefault();
    const newTasks = [
      ...tasks,
      {
        id: tasks.length + 1,
        content: newValue,
        status: "loading",
      },
    ];
    setTasks(newTasks);
    setNewValue(" ");
  };

  const checkLoading = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index],
      status: newTasks[index].status === "loading" ? "completed" : "loading",
    };
    setTasks(newTasks);
  };
  const checkTast = tasks.filter((x) => x.status === "loading");

  const handleDelete = (id) => {
    const newTasks = tasks.filter((x) => x.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <div className="input-container">
        <form onSubmit={handelSubmitTodoList}>
          <input
            className="input-control"
            type="text"
            value={newValue}
            placeholder="Enter the new to do"
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button className="btn-add">Add</button>
        </form>
      </div>
      <div className="title">
        There {checkTast.length > 1 ? "are" : "is"} {checkTast.length}{" "}
        {checkTast.length > 1 ? "tasks" : "task"} to complete
      </div>
      <div className="content">
        <ul className="content-list">
          {tasks.map((value, index) => (
            <li key={value.id} className="content-item">
              <div>
                <input type="checkbox" onChange={() => checkLoading(index)} />
                <span className={value.status === "loading" ? "" : "completed"}>
                  {value.content}
                </span>
              </div>
              <button
                className="btn-delete"
                type="submit"
                onClick={() => handleDelete(value.id)}
              >
                {" "}
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
