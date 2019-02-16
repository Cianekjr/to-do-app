import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = props => {
  const active = props.tasks.filter(task => !task.finishDate);
  active.sort((a, b) => {
    if (b.expirationDate > a.expirationDate) {
      return -1;
    } else if (b.expirationDate < a.expirationDate) {
      return 1;
    }
    return 0;
  });
  const activeTasks = active.map(task => <Task key={task.id} task={task} doTask={props.doTask} deleteTask={props.deleteTask} />);

  const done = props.tasks.filter(task => task.finishDate);
  done.sort((a, b) => b.finishDate - a.finishDate);
  const doneTasks = done.map(task => <Task key={task.id} task={task} doTask={props.doTask} deleteTask={props.deleteTask} />);

  return (
    <div className="tasks">
      <section className="tasks__active">
        <h2>Tasks to do: </h2>
        {active.length ? activeTasks : <p>There are no tasks to do</p>}
      </section>
      <section className="tasks__done">
        <h2>Tasks done ({doneTasks.length}):</h2>
        {done.length > 3 ? <span>You can see only last three tasks you have done.</span> : null}
        {doneTasks.slice(0, 3)}
      </section>
    </div>
  );
};

export default TaskList;
