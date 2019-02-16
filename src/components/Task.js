import React from "react";
import "./Task.css";

const Task = props => {
  const { id, text, expirationDate, important, finishDate } = props.task;

  const importantStyle = {
    color: "#D11241"
  };

  if (!finishDate) {
    return (
      <div className="task">
        <p className="task__description--todo">
          <strong style={important ? importantStyle : null}>{text}</strong> - before - <span>{expirationDate}</span>
        </p>
        <button className="task__done-btn btn" onClick={() => props.doTask(id)}>
          Done
        </button>
        <button className="task__delete-btn btn" onClick={() => props.deleteTask(id)}>
          X
        </button>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div className="task">
        <p className="task__description--done">
          <strong>{text}</strong>
          <span> (do before {expirationDate})</span>
        </p>
        <p className="task__done">You did it {finish}.</p>
        <button className="task__delete-btn btn" onClick={() => props.deleteTask(id)}>
          X
        </button>
      </div>
    );
  }
};

export default Task;
